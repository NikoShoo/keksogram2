const body = document.body;
const alertTemplate = body.querySelector('#data-error').content.querySelector('.data-error');

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
      return;
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

export const showModal = (modal, isVisible = true) => {
  if (isVisible) {
    modal.classList.remove('hidden');
    body.classList.add('modal-open');
  } else {
    modal.classList.add('hidden');
    body.classList.remove('modal-open');
  }
};

export const showAlert = (error) => {
  const alert = alertTemplate.cloneNode(true);
  alert.querySelector('.data-error__title').textContent = error;
  body.append(alert);
};



