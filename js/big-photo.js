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
