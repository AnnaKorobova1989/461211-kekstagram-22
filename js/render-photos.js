//import {getPhotoDescriptions} from './data.js';
import {createBigPhoto} from './big-photo.js';
export {similarPhotoElement};

const similarPhotoElement = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
//const similarPhotos = getPhotoDescriptions(25);

export const drawPhotos = (similarPhotos) => {
  const similarPhotoFragment = document.createDocumentFragment();

  similarPhotos.forEach((data) => {
    const {url, comments, likes} = data;
    const photoElement = templatePicture.cloneNode(true);

    photoElement.querySelector('img').src = url;
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;

    photoElement.addEventListener('click', function(evt) {
      evt.preventDefault();
      createBigPhoto(data);
    })

    similarPhotoFragment.appendChild(photoElement); 
    return similarPhotoFragment;
  })

  similarPhotoElement.appendChild(similarPhotoFragment);
}

//drawPhotos();
