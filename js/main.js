import { COUNT_PHOTOS } from './constants.js';
import './form.js';
import { getPhotos } from './mock-data.js';
import { renderCards } from './render-cards.js';

const data = getPhotos(COUNT_PHOTOS);
console.log(data);
renderCards(data);

