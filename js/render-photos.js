import {getComments, getPhotoDescriptions} from './data.js';

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


//big picture
const bigPicture = document.querySelector('.big-picture');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const similarComments = getComments();

similarPhotoElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
});

closeBtn.addEventListener('click', function() {
  bigPicture.classList.add('hidden');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === ('Escape' || 'Esc')) {
    bigPicture.classList.add('hidden');
  }
});

const descriptionBigPhoto = similarPhotoElement.querySelector('.social__caption');
descriptionBigPhoto = createDescriptionPhoto.description;



