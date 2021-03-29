import {isEscEvent} from './util.js';

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

let VISIBLE_COMMENTS_LENGTH = 5;
let start = 0;

//обработчик клика по клаве
const onEscapeKayDown = function (evt) {
  if(isEscEvent(evt)){
    closeModal();
  }
}

const openModal = function() {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');

  showVisibleComments();

  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscapeKayDown);
};

const closeModal = function() {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  closeBtn.removeEventListener('click', closeModal);
  document.removeEventListener('click', onEscapeKayDown);
};

const renderComments = (comments) => {
  let i = start;
  while (i < start + 5 && i < comments.length) {
    commentsList.appendChild(createComment(comments[i]));
    i++;
  }
  start += 5;
  if (start >= comments.length) {
    socialCommentCount.childNodes[0].textContent = `${comments.length} из `;
    commentsLoader.classList.add('hidden');
  } else {
    socialCommentCount.childNodes[0].textContent = `${start} из `;
  }

}

const showVisibleComments = () => {
  const comments = document.querySelectorAll('.social__comment');
  if (comments.length > VISIBLE_COMMENTS_LENGTH) {
    comments.forEach((comment, index) => {
      if (index >= VISIBLE_COMMENTS_LENGTH) {
        comment.classList.add('hidden');
      }
      else {
        comment.classList.remove('hidden');
      }
    })
  }
};

//начальная функция, чтобы наполнить шаблон данными
export const createBigPhoto = function({url, likes, description, comments}) {
  bigPictureImg.src = url;
  likesCount.textContent = likes;
  socialCaption.textContent = description;
  commentsCount.textContent = comments.length;

  start = 0;
  if (comments.length > VISIBLE_COMMENTS_LENGTH) {
    commentsLoader.classList.remove('hidden');
  }
  renderComments(comments);
  commentsLoader.onclick = () => {
    renderComments(comments);
  }

  fillComments(comments);
  openModal();
}

const fillComments = function(comments) {
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

  //вернуть элемент с наполненными данными

  return element;
};

