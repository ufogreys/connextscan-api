const config = require('config-yml');

let {
  log_level,
} = { ...config };

log_level = process.env.LOG_LEVEL ||
  log_level;

const log = (
  level = 'info',
  from,
  message,
  data = {},
) => {
  try {
    // normalize level
    level = level.toLowerCase();

    // generate log message
    const log_message = `${level === 'error' ? 'ERR' : level === 'warn' ? 'WARN' : level === 'debug' ? 'DBG' : 'INF'} [${from?.toUpperCase()}] ${message}\n${typeof data === 'string' ? data : typeof data === 'object' ? JSON.stringify(data, null, 2) : data}`;

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
    }
  } catch (error) {}
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const equals_ignore_case = (
  a,
  b,
) => (!a && !b) || a?.toLowerCase() === b?.toLowerCase();

const get_params = req => {
  const {
    query,
    body,
  } = { ...req };

  return {
    ...query,
    ...body,
  };
};

module.exports = {
  log,
  sleep,
  equals_ignore_case,
  get_params,
};