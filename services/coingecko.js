const axios = require('axios');
const config = require('config-yml');

const {
  coingecko,
} = { ...config?.external_api };

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
          timeout: 10000,
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