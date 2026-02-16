export const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export const uniqueGenerator = (a, b) => {
  const numbers = [];
  return () => {
    if (numbers.length > b - a + 1) {
      return
    }
    let n = getRandomInteger(a, b);
    while (numbers.includes(n)) {
      n = getRandomInteger(a, b);
    }
    numbers.push(n);
    return n;
  };
};

export const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
