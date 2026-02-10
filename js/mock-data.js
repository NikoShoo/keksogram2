import { Comments, DESCRIPTION, Likes, MESSAGES, NAMES } from './constants.js';
import { getRandomInteger } from './utils.js';

const createComment = () => ({
  id: getRandomInteger(1000000, 99999999),
  avatar: `./img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: MESSAGES[getRandomInteger(0, MESSAGES.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

const getPhoto = (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: DESCRIPTION[getRandomInteger(0, DESCRIPTION.length - 1)],
  likes: getRandomInteger(Likes.MIN, Likes.MAX),
  comments: Array.from({ length: getRandomInteger(Comments.MIN, Comments.MAX) }, createComment),
});

export const getPhotos = (n) => Array.from({ length: n }, getPhoto);

