import { resetScale } from './scale.js';
import { showModal } from './utils.js';
import { isValid, resetValidation } from './validation.js';

const formNode = document.querySelector('.img-upload__form');
const inputNode = formNode.querySelector('#upload-file');
const modalNode = formNode.querySelector('.img-upload__overlay');
const closeButtonNode = modalNode.querySelector('.img-upload__cancel');

const openModal = () => {
  showModal(modalNode);
};

const closeModal = () => {
  showModal(modalNode, false);
  formNode.reset();
  resetValidation();
  resetScale();
};

inputNode.addEventListener('change', () => {
  openModal();
});

closeButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formNode.addEventListener('submit', (evt) => {
  if (!isValid()) {
    evt.preventDefault();
  }
});

//Функция параметризированная которая открывает/закрывает(при нажатии на крестик).
//Два скролла.
