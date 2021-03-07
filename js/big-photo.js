const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsList = document.querySelector('.social__comments');
const templateComment = document.querySelector('#social__comment').content;

const bigPictureImg = document.querySelector('.big-picture__img > img');
const bigPicture = document.querySelector('.big-picture');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');

const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const body = document.querySelector('body');
const commentsLoader = document.querySelector('.comments-loader');



//обработчик клика по клаве
const onEscapeKayDown = function (evt) {
  if (evt.key === ('Escape' || 'Esc')) {
    closeModal();
  }
}

const openModal = function() {
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscapeKayDown);
};

const closeModal = function() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  closeBtn.removeEventListener('click', closeModal);
  document.removeEventListener('click', onEscapeKayDown);
};

//начальная функция, чтобы наполнить шаблон данными
export const createBigPhoto = function({url, likes, description, comments}) {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = createComments.length;
  
  fillComments(comments);
  openModal();
}

const fillComments = function (comments) {
  commentsList.textContent = ''; //очищаем содержимое
  commentsList.appendChild(createComments(comments));//наполняем картинкой и текстом
};

const createComments = function (comments) {
  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(createComment(comment));
  })

  return fragment;
};

const createComment = function (comment) {
  //найти разметку для комментария
  const element = templateComment.querySelector('.social__comment').cloneNode(true);

  //в разметке найти необходимые элементы
  const socialImg = element.querySelector('.social__picture');
  const socialText = element.querySelector('.social__text');

  //наполнить эти элементы необходимыми данными
  socialImg.setAttribute('src', comment.avatar);
  socialImg.setAttribute('alt', comment.name);
  socialText.textContent = comment.message;
  //вернуть элумент с наполненными данными

  return element;
};


























/*import {getComments, getPhotoDescriptions} from './data.js';
import {getRandomIntInclusive} from './util.js';
import {similarPhotoElement} from './render-photos.js';*/

/*const bigPicture = document.querySelector('.big-picture');
const closeBtn = bigPicture.querySelector('.big-picture__cancel');
const commentsList = document.querySelector('.social__comments');
const avatarWidth = 35;
const avatarHeight = 35;
const previewsList = document.querySelectorAll('.picture');
const bigPictureImg = document.querySelector('.big-picture__img > img');
const likesCount = document.querySelector('.likes-count');
const commentsCount = document.querySelector('.comments-count');
const socialCaption = document.querySelector('.social__caption');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const arrayOfComments = getComments(getRandomIntInclusive(3, 7));
const arrayOfPhotoDescription = getPhotoDescriptions(25);

similarPhotoElement.addEventListener('click', function(evt) {
  evt.preventDefault();
  bigPicture.classList.remove('hidden');
  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
});

closeBtn.addEventListener('click', function() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
});

document.addEventListener('keydown', function (evt) {
  if (evt.key === ('Escape' || 'Esc')) {
    bigPicture.classList.add('hidden');
  }
});

const createTemplate = function() {
  var commentTemplate = document.createElement('template');
  commentTemplate.id = 'social__comment';
  body.appendChild(commentTemplate);
  var newComment = document.createElement('li');
  newComment.classList.add('social__comment');
  commentsList.appendChild(newComment);
  commentTemplate.appendChild(newComment);
  const newAvatar = document.createElement('img');
  newAvatar.classList.add('social__picture');
  newAvatar.src;
  newAvatar.alt;
  newAvatar.width = avatarWidth;
  newAvatar.height = avatarHeight;
  newComment.appendChild(newAvatar);
  const socialText = document.createElement('p');
  socialText.classList.add('social__text');
  newComment.appendChild(socialText);
  return commentTemplate;
}

var commentItem = createTemplate();

const similarPhotoComments = document.querySelector('.social__comment');
console.log(similarPhotoComments);
const templateComment = document.querySelector('#social__comment').content.querySelector('.social__comment');
const similarComments = getComments(getRandomIntInclusive(3, 7));
const similarCommentFragment = document.createDocumentFragment();

console.log(templateComment);

const drawComments = () => {
  similarComments.forEach(({avatar, message}) => {
    const commentElement = templateComment.cloneNode(true);
    commentElement.querySelector('img').src = avatar;
    commentElement.querySelector('.social__text').textContent = message;
    similarCommentFragment.appendChild(commentElement);
    return similarCommentFragment;
  })
}

drawComments();
similarPhotoComments.appendChild(similarCommentFragment);

/*commentsList.appendChild(commentItem);

for (var i = 0; i < arrayOfComments.length; i++) {
  var cardItem = createComments(arrayOfComments[i]);
  commentsList.appendChild(cardItem);  
}

const createBigPhoto = function({url, likes, description}) {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = createComments.length;
}

for (var i = 0; i < arrayOfPhotoDescription.length; i++) {
    var descriptionPhoto = createBigPhoto(arrayOfPhotoDescription[i]);
}*/



