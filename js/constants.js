export const Popups = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
};

export const EFFECTS = {
  NONE: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat',
};

// Для эффекта «Хром» — filter: grayscale(0..1) с шагом 0.1;
// Для эффекта «Сепия» — filter: sepia(0..1) с шагом 0.1;
// Для эффекта «Марвин» — filter: invert(0..100%) с шагом 1%;
// Для эффекта «Фобос» — filter: blur(0..3px) с шагом 0.1px;
// Для эффекта «Зной» — filter: brightness(1..3) с шагом 0.1;

export const Effects = {
  [EFFECTS.NONE]: {
    style: '',
    units: '',
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 0.1,
      start: 100,
      connect: 'lower',
      format: {
        to: function (value) {
          return parseFloat(value);
        },
        from: function (value) {
          return parseFloat(value);
        },
      },
    },
  },
  [EFFECTS.CHROME]: {
    style: 'grayscale',
    units: '',
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
  },
  [EFFECTS.SEPIA]: {
    style: 'sepia',
    units: '',
    slider: {
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,
      start: 1,
    },
  },
  [EFFECTS.MARVIN]: {
    style: 'invert',
    units: '%',
    slider: {
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    },
  },
  [EFFECTS.PHOBOS]: {
    style: 'blur',
    units: 'px',
    slider: {
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
  },
  [EFFECTS.HEAT]: {
    style: 'brightness',
    units: '',
    slider: {
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,
      start: 3,
    },
  },
};

export const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100,
};

export const MAX_HASHTAGS = 5;

export const HASHTAG_FORMULA = /^#[a-zа-я0-9ё]{1,19}$/i;

export const MAX_DESCRIPTION = 5;

export const STEP_COMMENTS = 5;

export const COUNT_PHOTOS = 25;

export const Likes = {
  MIN: 0,
  MAX: 200,
};

export const Comments = {
  MIN: 0,
  MAX: 30,
};

export const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо.",
  "Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

export const DESCRIPTION = ['утро', 'солнышко', 'собака'];

export const NAMES = ["Виктор", "Диана", "Анастасия", "Александра", "Борис"];


