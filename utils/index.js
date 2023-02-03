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

const equals_ignore_case = (
  a,
  b,
) =>
  (
    !a &&
    !b
  ) ||
  a?.toLowerCase() === b?.toLowerCase();

const sleep = ms =>
  new Promise(
    resolve =>
      setTimeout(
        resolve,
        ms,
      )
  );

module.exports = {
  get_params,
  equals_ignore_case,
  sleep,
};