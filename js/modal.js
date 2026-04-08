import { Popups, STEP_COMMENTS } from './constants.js';
import { registerWindows, unregisterWindows } from './escape.js';
import { showPopup } from './popups.js';
import { showModal } from './utils.js';

const modalNode = document.querySelector('.big-picture');
const imageNode = modalNode.querySelector('.big-picture__img img');
const closeButtonNode = modalNode.querySelector('.big-picture__cancel');
const descriptionNode = modalNode.querySelector('.social__caption');
const likesNode = modalNode.querySelector('.likes-count');
const totalCommentsNode = modalNode.querySelector('.social__comment-total-count');
const commentTemplate = modalNode.querySelector('.social__comment');
const commentsListNode = modalNode.querySelector('.social__comments');
const loaderNode = modalNode.querySelector('.social__comments-loader');
const shownCommentsNode = modalNode.querySelector('.social__comment-shown-count');

let localComments;
let shownComments;
let currentPicture;

const renderStatistic = () => {
  shownCommentsNode.textContent = shownComments;
};

const renderLoader = () => {
  if (localComments.length) {
    loaderNode.classList.remove('hidden');
    return;
  }
  loaderNode.classList.add('hidden');
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, STEP_COMMENTS).forEach(({ avatar, message, name }) => {
    // create new comment
    const newComment = commentTemplate.cloneNode(true);
    const image = newComment.querySelector('.social__picture');
    image.src = avatar;
    image.alt = name;
    newComment.querySelector('.social__text').textContent = message;
    // append new comment
    fragment.append(newComment);
    shownComments++;
  });
  commentsListNode.append(fragment);
  renderStatistic();
  renderLoader();
};

const renderModal = ({ comments, url, description, likes }) => {
  imageNode.src = url;
  descriptionNode.textContent = description;
  likesNode.textContent = likes;
  totalCommentsNode.textContent = comments.length;
  //clear comments
  shownComments = 0;
  commentsListNode.innerHTML = '';
  localComments = [...comments];
  renderComments();
};

loaderNode.addEventListener('click', () => {
  renderComments();
});

// const onDocumentKeydown = (evt) => {
//   if (evt.key === 'Escape') {
//     showModal(modalNode, false);
//     showPopup(Popups.WARNING, currentPicture);
//      document.removeEventListener('keydown', onDocumentKeydown);
//   }
// };

const closeModal = () => {
  showModal(modalNode, false);
  showPopup(Popups.WARNING, currentPicture);
};

closeButtonNode.addEventListener('click', () => {
  unregisterWindows();
  closeModal();
  // document.removeEventListener('keydown', onDocumentKeydown);
});

export const openModal = (picture) => {
  // render modal
  renderModal(picture);
  // show modal
  showModal(modalNode);
  currentPicture = {
    description: picture.description,
    url: picture.url,
  };
  registerWindows(closeModal);
  // document.addEventListener('keydown', onDocumentKeydown);
};

