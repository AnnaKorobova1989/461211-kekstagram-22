import {getPhotoDescriptions} from './data.js';

const similarPhotoElement = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const similarPhotos = getPhotoDescriptions(25);
const similarPhotoFragment = document.createDocumentFragment();

const drawPhotos = () => {
  similarPhotos.forEach(({url, comments, likes}) => {
    const photoElement = templatePicture.cloneNode(true);
    photoElement.querySelector('img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;
    similarPhotoFragment.appendChild(photoElement);
    return similarPhotoFragment;
  })
}

drawPhotos();

similarPhotoElement.appendChild(similarPhotoFragment);
