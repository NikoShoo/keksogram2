import { getData } from './api.js';
import './form.js';
import { renderCards } from './render-cards.js';
import { showAlert } from './utils.js';

// const data = getPhotos(COUNT_PHOTOS);
// console.log(data);
// renderCards(data);

const initApp = async () => {
  try {
    const photos = await getData();
    renderCards(photos);
  } catch (error) {
    showAlert(error);
  };
};

initApp();


