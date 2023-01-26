const normalize_obj = object =>
  Array.isArray(object) ?
    object :
    Object.fromEntries(
      Object.entries(object)
        .map(([k, v]) =>
          [
            k,
            typeof v === 'object' ?
              normalize_obj(v) :
              typeof v === 'boolean' ?
                v :
                !isNaN(v) ?
                  Number(v) :
                  v,
          ]
        )
    );

module.exports = {
  normalize_obj,
};