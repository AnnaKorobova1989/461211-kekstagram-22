import {getRandomIntInclusive, getRandomArrayElement} from './util.js';
export {getPhotoDescriptions};

//Массив имен
const NAMES = [
  'Артём',
  'Ольга',
  'Иван',
  'Алексей',
  'Елена',
  'Михаил',
  'Екатерина',
  'Наталья',
]
  
//Массив комментариев
const CHITS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
  
//Массив описаний к фотографиям
const DESCRIPTIONS = [
  'Быть собой - лучший выбор.',
  'Настойчивость окупается сполна.',
  'Старые подходы не помогут открыть новые двери.',
  'Разве не потрясающе?',
  'Угадайте, где я',
  'Открываю для себя мир. Скоро вернусь.',
  'Свободный разум, свободная жизнь',
  'Запасаюсь воспоминаниями',
  'Работать. Копить. Путешествовать. Повторить.',
  'Время перемен',
]
  
//Создание объекта - комментария
const createCommentPhoto = (i) => ({
  id: i+1,
  avatar: 'img/avatar-' + getRandomIntInclusive(1, 6) + '.svg',
  message: getRandomArrayElement(CHITS),
  names: getRandomArrayElement(NAMES),
})
  
const getComments = function(quantityObjects) {
  let comments = [];
  for (let i = 0; i < quantityObjects; i++ ) {
    const newComment = createCommentPhoto(i);
    comments.push(newComment);
  }
  return comments;
}
  
//Создание объекта - описания к фотографии
const createDescriptionPhoto = (i) => ({
  id: i+1,
  url: `photos/${i+1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomIntInclusive(15, 200),
  comments: getComments(getRandomIntInclusive(3, 7)),
})
  
const getPhotoDescriptions = function(quantityObjects) {
  let photoDescriptions = [];
  for (let i = 0; i < quantityObjects; i++ ) {
    const newDescription = createDescriptionPhoto(i);
    photoDescriptions.push(newDescription);
  }
  return photoDescriptions;
}
  
getPhotoDescriptions(25);
