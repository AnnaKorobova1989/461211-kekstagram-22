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

//Вспом. функция - сверяет длину строки с максимально возможным значением
/*let getStrMaxLength = function (str, strMaxLength) {
  return str.length <= strMaxLength;
}*/

//Вспом. функция - возвращает случайное целое число из заданного диапазона
function getRandomIntInclusive(min, max) {
  if (min >= max) {
    alert('Задан неверный диапазон');
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Вспом. функция, возвращающая массив чисел, перемешанных случайным образом
/*const randomIntNonRepeat = function(int) {
  let arr = [];
  j = 1;
  for (let i = 1; i <= int; i++) {
    arr.push(j++);
  }
  arr.sort(function(){
    return Math.random() - 0.5;
  });
  return j;
}*/

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length-1)];
}

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
