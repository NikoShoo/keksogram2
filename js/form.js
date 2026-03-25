import { Popups } from './constants.js';
import './effect.js';
import { resetEffects } from './effect.js';
import { showPopup } from './popups.js';
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
  resetEffects();
};

inputNode.addEventListener('change', () => {
  openModal();
});

closeButtonNode.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeModal();
});

formNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (isValid()) {
    //  to disable of submit button.
    fetch('https://31.javascript.htmlacademy.pro/kekstagram/', {
      method: 'post',
      body: new FormData(formNode),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('ОШИБКАААА!!!!');
        }
        closeModal();
        showPopup(Popups.SUCCESS);
      })
      .finally(() => {
        //to enable of submit button
      })
      .catch(() => {
        showPopup(Popups.ERROR);
      })
  }
});

