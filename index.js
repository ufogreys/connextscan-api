exports.handler = async (
  event,
  context,
  callback,
) => {
  const axios = require('axios');
  const _ = require('lodash');
  const AWS = require('aws-sdk');
  const config = require('config-yml');
  const {
    crud,
  } = require('./services/index');
  const assets_price = require('./services/assets-price');
  const coingecko = require('./services/coingecko');
  const ens = require('./services/ens');
  const {
    get_params,
  } = require('./utils');

  let {
    environment,
  } = { ...config };

  environment = process.env.ENVIRONMENT ||
    environment;

  const evm_chains_data = require('./data')?.chains?.[environment]?.evm ||
    [];
  const assets_data = require('./data')?.assets?.[environment] ||
    [];

  // parse function event to req
  const req = {
    body: {
      ...(
        event.body &&
        JSON.parse(event.body)
      ),
    },
    query: {
      ...event.queryStringParameters,
    },
    params: {
      ...event.pathParameters,
    },
    method: event.requestContext?.http?.method,
    url: event.routeKey?.replace('ANY ', ''),
    headers: event.headers,
  };
  const params = get_params(req);

  let response;

  switch (req.url) {
    case '/':
      const {
        collection,
      } = { ...params };
      let {
        path,
        data,
      } = { ...params };

      const _module = params.module?.trim().toLowerCase();
      path = path ||
        '';

      delete params.module;
      delete params.path;

      switch (_module) {
        case 'index':
          try {
            response = await crud(params);
          } catch (error) {
            response = {
              error: true,
              code: 400,
              message: error?.message,
            };
          }
          break;
        case 'assets':
        case 'tokens':
          try {
            response = await assets_price(params);
          } catch (error) {
            response = {
              error: true,
              code: 400,
              message: error?.message,
            };
          }
          break;
        case 'coingecko':
          try {
            response = await coingecko(
              path,
              params,
            );
          } catch (error) {
            response = {
              error: true,
              code: 400,
              message: error?.message,
            };
          }
          break;
        case 'ens':
          try {
            response = await ens(
              path,
              params,
            );
          } catch (error) {
            response = {
              error: true,
              code: 400,
              message: error?.message,
            };
          }
          break;
        case 'data':
          switch (collection) {
            case 'chains':
              response = require('./data')?.chains?.[environment];
              break;
            case 'evm_chains':
              response = evm_chains_data;
              break;
            case 'assets':
              response = assets_data;
              break;
          };
          break;
        case 'bridge':
          const {
            bridge,
          } = { ...config?.[environment] };

          switch (collection) {
            case 'announcement':
              const region = process.env.REGION ||
                'us-east-1';
              const s3_bucket = process.env.BRIDGE_CONFIG_S3_BUCKET ||
                bridge?.config?.aws?.s3_bucket ||
                'config.bridge.connext.network';
              const s3_bucket_key = `${collection}${environment ? `_${environment}` : ''}.json`;

              // aws s3
              AWS.config.update({
                region,
              });
              const s3 = new AWS.S3();

              switch (path) {
                case '/set':
                  const [
                    username,
                    password,
                  ] = req.headers.authorization ?
                    Buffer.from(
                      req.headers.authorization,
                      'base64',
                    )
                    .toString()
                    .split(':') :
                    [];

                  const whitelists = _.uniq(
                    (
                      process.env.WHITELISTS ||
                      bridge?.config?.whitelists ||
                      ''
                    )
                    .split(',')
                    .map(a => a.trim().toLowerCase())
                    .filter(a => a)
                  );

                  if (whitelists.includes(password?.toLowerCase())) {
                    data = JSON.stringify(
                      {
                        data,
                      }
                    );

                    response = await new Promise(resolve =>
                      s3.putObject(
                        {
                          Bucket: s3_bucket,
                          Key: s3_bucket_key,
                          Body: data,
                          ACL: 'private',
                        },
                        (
                          err,
                          data,
                        ) =>
                          resolve(
                            data?.Body ?
                              data.Body.toString() :
                              null
                          )
                      )
                    );
                  }
                  break;
                default:
                  const _response = await axios.get(
                    `https://s3.${region}.amazonaws.com/${s3_bucket}/${s3_bucket_key}`,
                  ).catch(error => { return { data: { error } }; });

                  response = _response?.data;
                  break;
              }
              break;
            default:
              const git_repo = process.env.BRIDGE_CONFIG_GIT_REPO ||
                bridge?.config?.git?.repo ||
                'CoinHippo-Labs/connext-bridge';

              const _response = await axios.get(
                `https://raw.githubusercontent.com/${git_repo}/main/config/${environment}/${collection}.json`,
              ).catch(error => { return { data: { error } }; });

              response = _response?.data;
              break;
          }
          break;
        default:
          break;
      }
      break;
   default:
      break;
  }

  if (response?.error?.config) {
    delete response.error.config;
  }

  return response;
};