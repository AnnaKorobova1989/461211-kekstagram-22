import {getComments, getPhotoDescriptions} from './data.js';
import {getRandomIntInclusive} from './util.js';
import {similarPhotoElement} from './render-photos.js';

const bigPicture = document.querySelector('.big-picture');
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

const makeElement = function(tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createComments = function(comment) {
  const newComment = makeElement('li', 'social__comment');
  commentsList.appendChild(newComment);

  const newAvatar = makeElement('img', 'social__picture');
  newAvatar.src = comment.avatar;
  newAvatar.alt = comment.names;
  newAvatar.width = avatarWidth;
  newAvatar.height = avatarHeight;
  newComment.appendChild(newAvatar);

  const socialText = makeElement('p', 'social__text', comment.message);
  newComment.appendChild(socialText);
  return newComment;
}

var commentItem = createComments(arrayOfComments);
commentsList.appendChild(commentItem);

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
}



