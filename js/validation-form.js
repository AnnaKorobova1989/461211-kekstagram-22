import {isEscEvent} from './util.js';

const textHashTags = document.querySelector('.text__hashtags');
const description = document.querySelector('.text__description');
const inputBlock = document.querySelector('.img-upload__text');
const MAX_HASHTAG_COUNT = 5;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const onCancelEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

//Валидация хэш-тегов
const getHashTagValidation = textHashTags.addEventListener('input', () => {
  const hashTagValue = textHashTags.value;
  const arrayHashTags = hashTagValue.trim().split(' ');
  if (arrayHashTags.length > MAX_HASHTAG_COUNT) {
    textHashTags.setCustomValidity('Количество хэш-тегов не может быть больше' + MAX_HASHTAG_COUNT);
  } else {
    arrayHashTags.forEach(hashtag => {
      if (hashtag.length > MAX_HASHTAG_LENGTH) {
        textHashTags.setCustomValidity('Длина одного хэштега не может превышать 20 символов');
      } else if (!(/^[а-яА-ЯёЁa-zA-Z0-9]/).test(textHashTags.value)) {
        textHashTags.setCustomValidity('Строка после решётки должна состоять из букв и чисел и не может содержать иные символы');
      } else if (hashtag.length === 1 || hashtag.charAt(0) !== '#') {
        textHashTags.setCustomValidity('Хэштег должен начинаться с символа "#" ');
      } else {
        textHashTags.setCustomValidity('');
      }
    });
  }

  textHashTags.reportValidity();
});

//Валидация комментария
const getCommentValidation = description.addEventListener('input', () => {
  const descriptionValue = description.value;

  if (descriptionValue.length > MAX_COMMENT_LENGTH) {
    description.setCustomValidity('Длина комментария не может превышать' + MAX_COMMENT_LENGTH + ' символов');
  } else if (!descriptionValue) {
    description.setCustomValidity('');
  } else {
    description.setCustomValidity('');
  }
  
  description.reportValidity();
})

inputBlock.addEventListener('focus', () => {
  document.body.addEventListener('keydown', onCancelEscKeydown);
  description.addEventListener('input', getCommentValidation);
  textHashTags.addEventListener('input', getHashTagValidation);
}, true);
  
inputBlock.addEventListener('blur', () => {
  document.body.removeEventListener('keydown', onCancelEscKeydown);
  description.removeEventListener('input', getCommentValidation);
  textHashTags.removeEventListener('input', getHashTagValidation);
}, true);




