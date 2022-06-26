// import module for http request
const axios = require('axios');
// import lodash
const _ = require('lodash');
// import module for date time
const moment = require('moment');
// import config
const config = require('config-yml');
// import index
const { crud } = require('./index');
// data
const { assets } = require('../data');

// initial environment
const environment = process.env.ENVIRONMENT || config?.environment;
// initial default currency
const currency = 'usd';
// initial stablecoin threshold
const stablecoin_threshold = 0.01;

module.exports = async (params = {}) => {
  // initial response
  let response;
  // initial current time
  const current_time = moment();

  const _assets = assets?.[environment];
  const index_name = 'tokens';
  const addresses = _.uniq((Array.isArray(params.addresses) ? params.addresses : (params.addresses || params.address)?.split(',') || []).map(a => a?.trim().toLowerCase()).filter(a => a));
  const chain_id = params.chain_id;
  const timestamp = params.timestamp;
  if (chain_id && addresses.length > 0) {
    const query = {
      bool: {
        must: [
          { match: { chain_id } },
        ],
        should: addresses.map(a => {
          return {
            match: { contract_address: a },
          };
        }),
      },
    };
    const response_cache = !timestamp && await crud({ index: index_name, method: 'search', query, size: addresses.length });
    const data = addresses.map(a => {
      let d = {
        chain_id,
        contract_address: a,
        ..._assets?.find(_a => _a?.contracts?.findIndex(c => c?.chain_id === chain_id && c.contract_address?.toLowerCase() === a) > -1),
      };
      d = {
        ...d,
        ...d.contracts?.find(c => c?.chain_id === chain_id),
        price: d.is_stablecoin ? 1 : undefined,
      };
      delete d.contracts;
      return d;
    });
    response_cache?.data?.filter(t => t).forEach(t => {
      const data_index = data.findIndex(d => d.contract_address.toLowerCase() === t?.contract_address?.toLowerCase());
      if (data_index > -1) {
        data[data_index] = { ...data[data_index], ...t };
      }
    });

    const updated_at_threshold = current_time.subtract(1, 'hours').valueOf();
    let to_update_data = data.filter(d => !d?.updated_at || d.updated_at < updated_at_threshold);
    const coingecko_ids = to_update_data.map(d => _assets?.find(a => a?.contracts?.findIndex(c => c?.chain_id === chain_id && c.contract_address?.toLowerCase() === d.contract_address?.toLowerCase()) > -1 && a.coingecko_id)?.coingecko_id).filter(id => id);
    if (coingecko_ids.length > 0 && config?.external_api?.endpoints?.coingecko) {
      const coingecko = axios.create({ baseURL: config.external_api.endpoints.coingecko });
      // initial tokens data
      let tokens;
      if (timestamp) {
        for (let i = 0; i < coingecko_ids.length; i++) {
          const coingecko_id = coingecko_ids[i];
          // request coingecko
          const response_tokens = await coingecko.get(`/coins/${coingecko_id}/history`, { params: { id: coingecko_id, date: moment(Number(timestamp)).format('DD-MM-YYYY'), localization: 'false' } })
            .catch(error => { return { data: { error } }; });
          tokens = _.concat(tokens || [], [response_tokens?.data]);
        }
      }
      else {
        // request coingecko
        const response_tokens = await coingecko.get('/coins/markets', { params: { vs_currency: currency, ids: coingecko_ids.join(','), per_page: 250 } })
          .catch(error => { return { data: { error } }; });
        tokens = response_tokens?.data || [];
      }

      // update data from coingecko
      tokens?.filter(t => t).map(t => {
        const asset = _assets?.find(a => a?.coingecko_id === t.id);
        const contract = asset?.contracts?.find(c => c?.chain_id === chain_id);
        const symbol = contract?.symbol || asset?.symbol || t.symbol?.toUpperCase();
        let price = t.market_data?.current_price?.[currency] || t.current_price;
        price = asset?.is_stablecoin && Math.abs(price - 1) > stablecoin_threshold ? 1 : price;
        return {
          ...contract,
          chain_id,
          symbol,
          name: contract?.name || asset?.name || t?.name || symbol,
          image: contract?.image || asset?.image || t?.image?.thumb || t.image,
          price,
        };
      }).forEach(t => {
        const data_index = data.findIndex(d => d.contract_address.toLowerCase() === t?.contract_address?.toLowerCase());
        if (data_index > -1) {
          data[data_index] = { ...data[data_index], ...t };
        }
      });
    }

    const to_update_cache = !timestamp && data.filter(t => (!t?.updated_at || t.updated_at < updated_at_threshold) && ('symbol' in t));
    to_update_cache?.forEach(t => {
      const id = `${t?.chain_id || chain_id}_${t?.contract_address?.toLowerCase()}`;
      t.updated_at = moment().valueOf();
      // save token
      crud({ index: index_name, method: 'set', path: `/${index_name}/_update/${id}`, ...t, id });
    });
    response = data.map(d => {
      return {
        ...d,
        id: _assets?.find(a => a?.contracts?.findIndex(c => c?.chain_id === d.chain_id && c.contract_address?.toLowerCase() === d.contract_address?.toLowerCase()) > -1)?.id || d.id,
      };
    });
  }
  return response;
};