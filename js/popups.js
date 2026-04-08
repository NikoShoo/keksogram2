import { Popups } from './constants.js';
import { registerWindows, unregisterWindows } from './escape.js';

const body = document.body;
const successTemplate = body.querySelector('#success').content.querySelector('.success');
const errorTemplate = body.querySelector('#error').content.querySelector('.error');
const warningTemplate = body.querySelector('#warning').content.querySelector('.warning');

const templates = {
  [Popups.SUCCESS]: successTemplate,
  [Popups.ERROR]: errorTemplate,
  [Popups.WARNING]: warningTemplate,
};

export const showPopup = (type, data = null) => {
  const popup = templates[type].cloneNode(true);
  if (data) {
    const title = popup.querySelector('.warning__title');
    const img = document.createElement('img');
    img.classList.add('warning__img');
    img.src = data.url;
    title.parentNode.insertBefore(img, title.nextSibiling);
    title.textContent = data.description
      ? `Вы только что посмотрели ФОТО с названием «${data.description}»`
      : title.textContent = `Вы только что посмотрели красивое ФОТО  ${data.description}`;
  }
  body.append(popup);
  registerWindows(() => {
    popup.remove();
  });
  // document.addEventListener('keydown', onDocumentKeydown);
  // function onDocumentKeydown(evt) {
  //   if (evt.key === 'Escape') {
  //     popup.remove();
  //     document.removeEventListener('keydown', onDocumentKeydown);
  //   }
  // }
  popup.addEventListener('click', ({ target }) => {
    if (target.classList.contains(type) || target.classList.contains(`${type}__button`)) {
      popup.remove();
      unregisterWindows();
      //document.removeEventListener('keydown', onDocumentKeydown);
    }
  });
};

