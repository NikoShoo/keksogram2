import { Scale } from './constants.js';

const scaleNode = document.querySelector('.img-upload__scale');
const plusNode = scaleNode.querySelector('.scale__control--bigger');
const minusNode = scaleNode.querySelector('.scale__control--smaller');
const inputNode = scaleNode.querySelector('.scale__control--value');
const imgNode = document.querySelector('.img-upload__preview img');

let currentScale = Scale.DEFAULT;

const render = () => {
  inputNode.value = `${currentScale}%`;
  imgNode.style.transform = `scale(${currentScale}%)`;
};

plusNode.addEventListener('click', () => {
  if (currentScale < Scale.MAX) {
    currentScale = currentScale + Scale.STEP;
    render();
  }
});

minusNode.addEventListener('click', () => {
  if (currentScale > Scale.MIN) {
    currentScale = currentScale - Scale.STEP;
    render();
  }
});

render();

export const resetScale = () => {
  currentScale = Scale.DEFAULT;
  render();
};
