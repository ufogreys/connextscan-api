const _ = require('lodash');
const moment = require('moment');
const config = require('config-yml');

const {
  read,
  write,
} = require('./index');
const coingecko = require('./coingecko');
const {
  equals_ignore_case,
  sleep,
} = require('../utils');
const data = require('../data');

let {
  environment,
} = { ...config };

environment =
  process.env.ENVIRONMENT ||
  environment;

const assets_data =
  data?.assets?.[environment] ||
  [];

module.exports = async (
  params = {},
  collection = 'assets',
  currency = 'usd',
) => {
  let response;

  const current_time = moment();

  const {
    asset,
    timestamp,
  } = { ...params };
  let {
    assets,
  } = { ...params };

  assets =
    _.uniq(
      (
        Array.isArray(assets) ?
          assets :
          (
            assets ||
            asset ||
            ''
          )
          .split(',')
      )
      .map(a =>
        (a || '')
          .trim()
          .toLowerCase()
      )
      .filter(a => a)
    );

  if (assets.length > 0) {
    const price_timestamp =
      moment(
        Number(timestamp) ||
        current_time
          .valueOf()
      )
      .startOf('day')
      .valueOf();

    const cache =
      current_time
        .diff(
          moment(
            price_timestamp
          ),
          'hours',
        ) > 0 &&
      await read(
        collection,
        {
          bool: {
            must:
              [
                {
                  match: {
                    price_timestamp,
                  },
                },
              ],
            should:
              assets
                .map(a => {
                  return {
                    match: {
                      asset_id: a,
                    },
                  };
                }),
            minimum_should_match: 1,
          },
        },
        {
          size: assets.length,
        },
      );

    const data =
      assets
        .map(a => {
          const asset_data =
            assets_data
              .find(_a =>
                equals_ignore_case(
                  _a?.id,
                  a,
                )
              );

          const {
            id,
            coingecko_id,
            is_stablecoin,
          } = { ...asset_data };

          return {
            id: `${id}_${price_timestamp}`,
            asset_id: id,
            coingecko_id,
            price:
              is_stablecoin ?
                1 :
                undefined,
          };
        });

    if (cache?.data) {
      cache.data
        .filter(d => d)
        .forEach(d => {
          const index =
            data
              .findIndex(_d =>
                equals_ignore_case(
                  _d.asset_id,
                  d.asset_id,
                )
              );

          if (index > -1) {
            data[index] = {
              ...data[index],
              ...d,
            };
          }
        });
    }

    const updated_at_threshold =
      current_time
        .subtract(
          1,
          'hours',
        )
        .valueOf();

    const to_update_data =
      data
        .filter(d =>
          !d?.updated_at ||
          d.updated_at < updated_at_threshold
        );

    const coingecko_ids =
      to_update_data
        .map(d => d?.coingecko_id)
        .filter(id => id);

    if (coingecko_ids.length > 0) {
      let _data;

      if (timestamp) {
        for (const id of coingecko_ids) {
          const _response =
            await coingecko(
              `/coins/${id}/history`,
              {
                id,
                date:
                  moment(
                    Number(timestamp)
                  )
                  .format('DD-MM-YYYY'),
                localization: 'false',
              },
            );

          _data =
            _.concat(
              _data,
              Array.isArray(_response) ?
                _response :
                [],
            )
            .filter(d => d);
        }
      }
      else {
        const _response =
          await coingecko(
            '/coins/markets',
            {
              vs_currency: currency,
              ids:
                coingecko_ids
                  .join(','),
              per_page: 250,
            },
          );

        _data =
          Array.isArray(_response) ?
            _response :
            [];
      }

      // update data from coingecko
      _data
        .filter(d => d)
        .map(d => {
          const {
            id,
            market_data,
            current_price,
          } = { ...d };

          const asset_data =
            assets_data
              .find(a =>
                a?.coingecko_id === id
              );

          const {
            name,
            symbol,
            image,
            is_stablecoin,
          } = { ...asset_data };

          let price =
            market_data?.current_price?.[currency] ||
            current_price;

          price =
            !price &&
            is_stablecoin ?
              1 :
              price;

          return {
            id: `${asset_data?.id}_${price_timestamp}`,
            asset_id: asset_data?.id,
            coingecko_id: id,
            name,
            symbol,
            image,
            price,
          };
        })
        .forEach(d => {
          const index =
            data
              .findIndex(_d =>
                equals_ignore_case(
                  _d.asset_id,
                  d.asset_id,
                )
              );

          if (index > -1) {
            data[index] = {
              ...data[index],
              ...d,
            };
          }
        });
    }

    const updated_data =
      data
        .filter(d =>
          d?.asset_id &&
          ('symbol' in d) &&
          (
            !d.updated_at ||
            d.updated_at < updated_at_threshold
          )
        );

    if (updated_data.length > 0) {
      const synchronous = updated_data.length < 5;

      for (const d of updated_data) {
        const {
          asset_id,
        } = { ...d };

        const updated_at =
          moment()
            .valueOf();

        const price_timestamp =
          moment(
            Number(timestamp) ||
            updated_at
          )
          .startOf('day')
          .valueOf();

        const id = `${asset_id}_${price_timestamp}`;

        const write_data =
          {
            ...d,
            id,
            price_timestamp,
            updated_at,
          };

        if (synchronous) {
          await write(
            collection,
            id,
            write_data,
          );
        }
        else {
          write(
            collection,
            id,
            write_data,
          );
        }
      }

      if (!synchronous) {
        await sleep(5 * 1000);
      }
    }

    response = data;
  }

  return response;
};