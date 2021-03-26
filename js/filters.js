import {randomIntNonRepeat} from './util.js';

const filterDefault = document.querySelector('#filter-default');
const filterRandom = document.querySelector('#filter-random');
const filterDiscussed = document.querySelector('#filter-discussed');
const imgFiltersButtons = document.querySelectorAll('.img-filters__button');


const removePicture = () => document.querySelectorAll('.picture').forEach(element => element.remove());


const getRandomPicture = randomIntNonRepeat(24);

//отрисовка 10 случайных неповторяющихся фотографий
export const getNotRepeatPicture = function(data){
  const b = [];
  for (let i = 0; i < getRandomPicture.length; i++) {
    const newElement = data[getRandomPicture[i]];
    b.push(newElement);
  }
  return b.slice(0,10);
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
    //filterRandom.classList.add('img-filters__button--active');
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


for (let i = 0; i < imgFiltersButtons.length; i++) {
  imgFiltersButtons[i].addEventListener('click', function() {
    removePicture();
    const activeButton = document.querySelector('.img-filters__button--active');
    activeButton.classList.remove('img-filters__button--active');
    imgFiltersButtons[i].classList.add('img-filters__button--active');
  })
}

