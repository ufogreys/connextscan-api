exports.handler = async (
  event,
  context,
  callback,
) => {
  const config = require('config-yml');

  const {
    getParams,
  } = require('./utils');

  let {
    environment,
  } = { ...config };

  environment = process.env.ENVIRONMENT || environment;

  // parse function event to req
  const req = {
    body: { ...(event.body && JSON.parse(event.body)) },
    query: { ...event.queryStringParameters },
    params: { ...event.pathParameters },
    method: event.requestContext?.http?.method,
    url: (event.routeKey || '').replace('ANY ', ''),
    headers: event.headers,
  };

  const params = getParams(req);

  let response;

  switch (req.url) {
    case '/':
      const {
        collection,
      } = { ...params };

      switch (params.module) {
        case 'data':
          const data = require('./data');

          if (collection) {
            response = data[collection]?.[environment];
          }
          else {
            response = data;
          }
          break;
        case 'assets-price':
          try {
            response = await require(`./services/${params.module}`)(params);
          } catch (error) {
            response = {
              error: true,
              code: 400,
              message: error?.message,
            };
          }
          break;
        default:
          break;
      }
      break;
   default:
      break;
  }

  return response;
};