import {getPhotoDescriptions} from './data.js';
import {createBigPhoto} from './big-photo.js';
export {similarPhotoElement};

const similarPhotoElement = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const similarPhotos = getPhotoDescriptions(25); //получили сгенерированные данные для фотографий

const drawPhotos = () => { //функция, которая отрисовывает миниатюры фоторрафий
  const similarPhotoFragment = document.createDocumentFragment(); //создаем фрагмент документа, записываем в переменную

  similarPhotos.forEach((data) => { //для каждого элемента массива объектов
    const {url, comments, likes} = data; //используем ключи url, comments, likes
    const photoElement = templatePicture.cloneNode(true); //полностью клонируем содержимое шаблона и записываем в переменную

    photoElement.querySelector('img').src = url; //находим в клоне img, записываем туда ключ url
    photoElement.querySelector('.picture__comments').textContent = comments.length;
    photoElement.querySelector('.picture__likes').textContent = likes;

    photoElement.addEventListener('click', function(evt) {// для каждого элемента вызываем слушатель события клик
      evt.preventDefault();
      createBigPhoto(data); //если кликнули на миниатюре, вызываем функцию
    })

    similarPhotoFragment.appendChild(photoElement); 
    return similarPhotoFragment;
  })

  similarPhotoElement.appendChild(similarPhotoFragment);
}

drawPhotos();
