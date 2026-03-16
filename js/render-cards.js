import { openModal } from './modal.js';

const template = document
  .querySelector('#picture')
  .content
  .querySelector('.picture');

const picturesNode = document.querySelector('.pictures');

export const renderCards = (photos) => {
  const fragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const newCard = template.cloneNode(true);
    const image = newCard.querySelector('.picture__img');
    image.src = photo.url;
    image.alt = photo.description;
    newCard.querySelector('.picture__comments').textContent = photo.comments.length;
    newCard.querySelector('.picture__likes').textContent = photo.likes;
    fragment.append(newCard);
    newCard.addEventListener('click', () => {
      openModal(photo);
    });
  });
  picturesNode.append(fragment);
};

