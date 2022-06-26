// import config
const config = require('config-yml');

// initial log level
const log_level = process.env.LOG_LEVEL || config?.log_level;

const log = (level, from, message, data = {}) => {
  // generate log message
  const log_message = `${level === 'error' ? 'ERR' : level === 'warn' ? 'WARN' : level === 'debug' ? 'DBG' : 'INF'} [${from?.toUpperCase()}] ${message}\n${typeof data === 'string' ? data : typeof data === 'object' && data ? JSON.stringify(data, null, 2) : data}`;

  // normalize level
  level = level?.toLowerCase();

  switch (level) {
    case 'error':
      console.error(log_message);
      break;
    case 'warn':
      console.warn(log_message);
      break;
    case 'debug':
      if (log_level === 'debug') {
        console.debug(log_message);
      }
      break;
    default:
      console.log(log_message);
      break;
  };
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const get_params = req => {
  // initial params
  const params = {
    ...req.query,
    ...req.body,
  };
  return params;
};

module.exports = {
  log,
  sleep,
  get_params,
};