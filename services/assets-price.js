const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const config = require('config-yml');
const {
  read,
  write,
} = require('./index');
const {
  equals_ignore_case,
} = require('../utils');

const {
  endpoints,
} = { ...config?.external_api };
let {
  environment,
} = { ...config };

environment = process.env.ENVIRONMENT ||
  environment;

const data = require('../data');
const assets_data = data?.assets?.[environment] || [];
const currency = 'usd';
const stablecoin_threshold = 0.01;
const collection = 'assets';

module.exports = async (
  params = {},
) => {
  let response;
  const current_time = moment();

  const {
    chain_id,
    address,
    timestamp,
  } = { ...params };
  let {
    addresses,
  } = { ...params };

  addresses = _.uniq(
    (Array.isArray(addresses) ?
      addresses :
      (addresses || address || '')
        .split(',')
    )
    .filter(d => d)
    .map(d => d?.trim().toLowerCase())
  );

  if (addresses.length > 0) {
    const price_timestamp = moment(
      Number(timestamp) ||
      current_time.valueOf()
    ).startOf('day').valueOf();

    const response_cache = current_time.diff(moment(price_timestamp), 'hours') > 4 &&
      await read(
        collection,
        {
          bool: {
            must: [
              { match: { price_timestamp } },
            ],
            should: addresses.map(a => {
              return {
                match: { contract_address: a },
              };
            }),
            minimum_should_match: 1,
          },
        },
        {
          size: addresses.length,
        },
      );

    const data = addresses.map(a => {
      const asset_data = assets_data.find(_a =>
        _a?.contracts?.findIndex(c =>
          c?.chain_id === chain_id &&
          equals_ignore_case(c.contract_address, _a)
        ) > -1
      );

      const {
        id,
        coingecko_id,
        is_stablecoin,
      } = { ...asset_data };

      return {
        id,
        chain_id,
        contract_address: a,
        coingecko_id,
        price: is_stablecoin ?
          1 :
          undefined,
      };
    });

    if (response_cache?.data) {
      response_cache.data
        .filter(a => a)
        .forEach(a => {
          const data_index = data.findIndex(d => equals_ignore_case(d.contract_address, a?.contract_address));

          if (data_index > -1) {
            data[data_index] = {
              ...data[data_index],
              ...a,
            };
          }
        });
    }

    const updated_at_threshold = current_time.subtract(1, 'hours').valueOf();

    const to_update_data = data.filter(d =>
      !d?.updated_at ||
      d.updated_at < updated_at_threshold
    );

    const coingecko_ids = to_update_data
      .map(d => d?.coingecko_id)
      .filter(id => id);

    if (coingecko_ids.length > 0 && endpoints?.coingecko) {
      const coingecko = axios.create({ baseURL: endpoints.coingecko });

      let _data;

      if (timestamp) {
        for (const coingecko_id of coingecko_ids) {
          const _response = await coingecko.get(
            `/coins/${coingecko_id}/history`,
            {
              params: {
                id: coingecko_id,
                date: moment(Number(timestamp)).format('DD-MM-YYYY'),
                localization: 'false',
              },
            },
          ).catch(error => { return { data: { error } }; });

          const {
            error,
          } = { ..._response?.data };

          _data = _.concat(
            _data || [],
            !error && _response?.data ?
              _response.data :
              [],
          );
        }
      }
      else {
        const _response = await coingecko.get(
          '/coins/markets',
          {
            params: {
              vs_currency: currency,
              ids: coingecko_ids.join(','),
              per_page: 250,
            },
          },
        ).catch(error => { return { data: { error } }; });

        _data = Array.isArray(_response?.data) ?
          _response.data :
          [];
      }

      // update data from coingecko
      _data
        .filter(a => a)
        .map(a => {
          const {
            id,
            market_data,
            current_price,
          } = { ...a };

          const asset_data = assets_data.find(_a => _a?.coingecko_id === id);
          const {
            name,
            symbol,
            image,
            contracts,
            is_stablecoin,
          } = { ...asset_data };

          const contract_data = contracts?.find(c => c?.chain_id === chain_id);

          let price = market_data?.current_price?.[currency] ||
            current_price;

          price = is_stablecoin && Math.abs(price - 1) > stablecoin_threshold ?
            1 :
            price;

          return {
            id: asset_data?.id,
            name,
            symbol,
            image,
            ...contract_data,
            coingecko_id: id,
            price,
          };
        })
        .forEach(a => {
          const data_index = data.findIndex(d => equals_ignore_case(d.contract_address, a?.contract_address));

          if (data_index > -1) {
            data[data_index] = {
              ...data[data_index],
              ...a,
            };
          }
        });
    }

    const to_update_cache = data.filter(d =>
      d?.id &&
      (
        !d.updated_at ||
        d.updated_at < updated_at_threshold
      ) &&
      ('symbol' in d)
    );

    to_update_cache.forEach(d => {
      const {
        id,
      } = { ...d };

      const updated_at = moment().valueOf();

      const price_timestamp = moment(
        Number(timestamp) ||
        updated_at
      ).startOf('day').valueOf();

      write(
        collection,
        `${id}_${price_timestamp}`,
        {
          ...d,
          price_timestamp,
          updated_at,
        },
      );
    });
  }

  return response;
};