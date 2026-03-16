import { HASHTAG_FORMULA, MAX_DESCRIPTION, MAX_HASHTAGS } from './constants.js';

const formNode = document.querySelector('.img-upload__form');
const descriptionNode = formNode.querySelector('.text__description');
const hashtagNode = formNode.querySelector('.text__hashtags');


const validation = new Pristine(formNode, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper--error',
});

const checkLength = (value) => value.length <= MAX_DESCRIPTION;

const getHashtags = (text) => text.toLowerCase().split(' ').filter((item) => item.length);

const checkHashtag = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.every((item) => HASHTAG_FORMULA.test(item));
};

const checkHashtagsLength = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  return hashtags.length <= MAX_HASHTAGS;
};

const checkUniques = (value) => {
  if (!value.trim().length) {
    return true;
  }
  const hashtags = getHashtags(value);
  const uniques = [...new Set(hashtags)];
  return hashtags.length === uniques.length;
}

validation.addValidator(
  descriptionNode,
  checkLength,
  `Строка не должна привышать ${MAX_DESCRIPTION} символов!`,
);

validation.addValidator(
  hashtagNode,
  checkHashtag,
  'Невалидный хештег',
);

validation.addValidator(
  hashtagNode,
  checkHashtagsLength,
  `Нельзя указать больше ${MAX_HASHTAGS} хэштегов!`,
);

validation.addValidator(
  hashtagNode,
  checkUniques,
  'Один и тот же хэштег не может быть использован дважды!',
);

export const resetValidation = () => {
  validation.reset();
};

export const isValid = () => validation.validate();

//.split(' ').filter((item)=>item.length);
