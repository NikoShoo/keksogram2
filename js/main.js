const COUNT_PHOTOS = 25;

const MESSAGES = [
  "Всё отлично!",
  "В целом всё неплохо.",
  "Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const NAMES = ["Виктор", "Диана", "Анастасия", "Александра", "Борис"];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const createUser = () => {
  const randomNameIndex = getRandomInteger(0, NAMES.length - 1);
  return {
    id: 4,
    avatar: '',
    message: '',
    name: NAMES[randomNameIndex],
  }
};

const getPhoto = (_, i) => ({
  id: i + 1,
  url: `photos/${i + 1}.jpg`,
  description: "Кот",
  likes: 20,
  comments: [
    {
      id: i,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артём',
    },
    {
      id: i,
      avatar: 'img/avatar-6.svg',
      message: 'В целом всё неплохо. Но не всё.',
      name: 'Артём',
    },
  ],
});

const getPhotos = (n) => Array.from({ length: n }, getPhoto);


console.log(getPhotos(COUNT_PHOTOS));


