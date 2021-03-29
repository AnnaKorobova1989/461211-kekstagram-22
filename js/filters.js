import {randomIntNonRepeat} from './util.js';

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const imgFiltersButtons = document.querySelectorAll('.img-filters__button');


const removePicture = () => document.querySelectorAll('.picture').forEach(element => element.remove());


const getRandomPicture = randomIntNonRepeat(24);

//отрисовка 10 случайных неповторяющихся фотографий
export const getNotRepeatPicture = function(data, maxCount){
  const filteredPictures = [];

  for (let i = 0; i < getRandomPicture.length; i++) {
    const newElement = data[getRandomPicture[i]];
    filteredPictures.push(newElement);
  }

  return filteredPictures.slice(0, maxCount);
}

// Сортировка фотографий в порядке убывания количества комментариев
export const sortPicturesByComment = (pictureA, pictureB) => {
  const commentA = pictureA.comments.length;
  const commentB = pictureB.comments.length;

  return commentB - commentA;
}

//Функция отрисовки фотографий в порядке убывания количества комментариев
export const getSortedPicturesByComment = (data) => {
  return data.slice().sort(sortPicturesByComment);
} 

export const setFilterRandomPicture = (cb) => {
  filterRandom.addEventListener('click', () => {
    cb();
  });
}

export const setFilterDiscussedPicture = (cb) => {
  filterDiscussed.addEventListener('click',() =>{
    cb();
  });
}

export const setFilterDefaultPicture = (cb) => {
  filterDefault.addEventListener('click', () => {
    cb();
  });
}

const setActiveClass = () => {
  for (let i = 0; i < imgFiltersButtons.length; i++) {
    imgFiltersButtons[i].addEventListener('click', function() {
      const activeButton = document.querySelector('.img-filters__button--active');
      
      removePicture();
      activeButton.classList.remove('img-filters__button--active');
      imgFiltersButtons[i].classList.add('img-filters__button--active');
    })
  }
};

setActiveClass();
