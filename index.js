exports.handler = async (event, context, callback) => {
  // import module for http request
  const axios = require('axios');
  // import lodash
  const _ = require('lodash');
  // import aws sdk
  const AWS = require('aws-sdk');
  // import config
  const config = require('config-yml');
  // import tokens
  const tokens = require('./services/tokens');
  // import index
  const { crud } = require('./services/index');
  // import utils
  const { get_params } = require('./utils');
  // data
  const { chains, assets } = require('./data');

  // initial environment
  const environment = process.env.ENVIRONMENT || config?.environment;

  // parse function event to req
  const req = {
    body: (event.body && JSON.parse(event.body)) || {},
    query: event.queryStringParameters || {},
    params: event.pathParameters || {},
    method: event.requestContext?.http?.method,
    url: event.routeKey?.replace('ANY ', ''),
    headers: event.headers,
  };

  // initial response
  let response;
  // initial params
  const params = get_params(req);

  // handle api routes
  switch (req.url) {
    case '/':
      // initial module
      const _module = params.module?.trim().toLowerCase();
      delete params.module;

      // initial path
      let path = params.path || '';
      delete params.path;

      // initial variables
      let res;

      // run each module
      switch (_module) {
        case 'tokens':
          res = { data: await tokens(params) };
          break;
        case 'index':
          res = { data: await crud(params) };
          break;
        case 'coingecko':
          if (config?.external_api?.endpoints?.coingecko) {
            const coingecko = axios.create({ baseURL: config.external_api.endpoints.coingecko });
            // request coingecko
            res = await coingecko.get(path, { params })
              .catch(error => { return { data: { error } }; });
          }
          break;
        case 'ens':
          if (config?.external_api?.endpoints?.ens) {
            const ens = axios.create({ baseURL: config.external_api.endpoints.ens });
            // request ens
            res = await ens.get(path, { params })
              .catch(error => { return { data: { error } }; });
          }
          break;
        case 'data':
          let data = { chains: chains?.[environment], assets: assets?.[environment] };
          if (data[params.collection]) {
            data = data[params.collection];
          }
          res = { data };
          break;
        case 'bridge':
          switch (params.collection) {
            case 'announcement':
              const aws_region = process.env.AWS_REGION || config?.[environment]?.bridge?.config?.aws?.region || 'us-east-1';
              const s3_bucket = process.env.BRIDGE_CONFIG_S3_BUCKET || config?.[environment]?.bridge?.config?.aws?.s3_bucket || 'config.bridge.connext.network';
              const s3_bucket_key = `${params.collection}${environment ? `_${environment}` : ''}.json`;
              // aws s3
              AWS.config.update({
                accessKeyId: config?.[environment]?.bridge?.config?.aws?.access_key_id,
                secretAccessKey: config?.[environment]?.bridge?.config?.aws?.secret_access_key,
                region: aws_region,
              });
              const s3 = new AWS.S3();
              switch (path) {
                case '/set':
                  const [username, password] = req.headers.authorization ? Buffer.from(req.headers.authorization, 'base64').toString().split(':') : [];
                  const whitelists = _.uniq((process.env.WHITELISTS || config?.[environment]?.bridge?.config?.whitelists)?.split(',').map(a => a?.trim().toLowerCase()).filter(a => a) || []);
                  if (whitelists.includes(password?.toLowerCase())) {
                    const data = JSON.stringify({ data: params.data });
                    res = {
                      data: await new Promise(resolve =>
                        s3.putObject({
                          Bucket: s3_bucket,
                          Key: s3_bucket_key,
                          Body: data,
                          ACL: 'private'
                        }, (err, data) => resolve(data?.Body ? data.Body.toString() : null))
                      ),
                    };
                  }
                  break;
                default:
                  res = await axios.get(`https://s3.${aws_region}.amazonaws.com/${s3_bucket}/${s3_bucket_key}`);
                  break;
              };
              break;
            default:
              const git_repo = process.env.BRIDGE_CONFIG_GIT_REPO || config?.[environment]?.bridge?.config?.git?.repo || 'CoinHippo-Labs/connext-bridge';
              res = await axios.get(`https://raw.githubusercontent.com/${git_repo}/main/config/${environment}/${params.collection}.json`);
              break;
          };
          break;
        default:
          break;
      };

      // set response
      if (res?.data) {
        response = res.data;
        // remove error config
        if (response.error?.config) {
          delete response.error.config;
        }
      }
      break;
   default:
      break;
  };

  // return response
  return response;
};