import { EFFECTS, Effects } from "./constants";

const fildsetNode = document.querySelector('.img-upload__effect-level');
const effectListNode = document.querySelector('.effects__list');
const imgNode = document.querySelector('.img-upload__preview img');
const sliderNode = document.querySelector('.effect-level__slider');
const levelInputNode = document.querySelector('.effect-level__value');

let currentEffect = EFFECTS.NONE;

noUiSlider.create(sliderNode, Effects[currentEffect].slider);

const render = () => {
  if (currentEffect === EFFECTS.NONE) {
    imgNode.style.filter = '';
  } else {
    const { style, units } = Effects[currentEffect];
    imgNode.style.filter = `${style}(${levelInputNode.value}${units})`;
  }
};

const updateSlider = () => {
  const { slider } = Effects[currentEffect];
  sliderNode.noUiSlider.updateOptions(slider);
};

sliderNode.noUiSlider.on('update', () => {
  levelInputNode.value = sliderNode.noUiSlider.get();
  render();
});

const showSlider = (isVisible = true) => {
  fildsetNode.classList.toggle('hidden', !isVisible);
};

export const resetEffects = () => {
  currentEffect = EFFECTS.NONE;
  showSlider(false);
  render();
};


effectListNode.addEventListener('change', (evt) => {
  console.log(evt.target.value);
  currentEffect = evt.target.value;
  if (currentEffect === EFFECTS.NONE) {
    resetEffects();
  } else {
    updateSlider();
    showSlider();
  }
});

resetEffects();

