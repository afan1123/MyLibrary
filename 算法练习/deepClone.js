const deepClone = (origin) => {
  if (typeof origin !== 'object') {
    return origin;
  }
  const result = origin.constructor();
  for (let key in origin) {
    result[key] =
      typeof origin[key] === 'object' ? deepClone(origin[key]) : origin[key];
  }
  return result;
};
