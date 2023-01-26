const axios = require('axios');
const config = require('config-yml');

const {
  endpoints,
} = { ...config?.external_api };
const {
  coingecko,
} = { ...endpoints };

module.exports = async (
  path = '',
  params = {},
) => {
  let response;

  if (coingecko) {
    const api =
      axios.create(
        {
          baseURL: coingecko,
        },
      );

    const _response =
      await api
        .get(
          path,
          { params },
        )
        .catch(error => {
          return {
            data: {
              error,
            },
          };
        });

    const {
      data,
    } = { ..._response };

    response = data;
  }

  return response;
};