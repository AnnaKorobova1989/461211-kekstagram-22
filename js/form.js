import {sendData} from './api.js';
import {onCancelEscKeydown} from './util.js';
import {closeModal} from './img-upload.js';
import {onMessageSuccess, onMessageError} from './messages.js';


const sendPhotoForm = document.querySelector('.img-upload__form');

const textHashTagsInput = sendPhotoForm.querySelector('.text__hashtags');
const descriptionElement = sendPhotoForm.querySelector('.text__description');

const MAX_HASHTAG_COUNT = 5;
const MIN_HASHTAG_SIMBOL = 2;
const MAX_HASHTAG_LENGTH = 20;
const MAX_COMMENT_LENGTH = 140;

const checkDuplicateHashTag = (hashTags) => {
  let hasDuplicate = false;
  const checkHashTags = [];

  hashTags.forEach((hashTag) => {
    if (checkHashTags.includes(hashTag)) {
      hasDuplicate = true;
      return;
    }

    checkHashTags.push(hashTag);
  })

  return hasDuplicate;
}

const onHashTagValidation = () => {
  let hashTagValue = textHashTagsInput.value;
  const hashTags = hashTagValue.trim().toLowerCase().split(' ');

  hashTags.forEach(hashtag => {
    if (hashTags.length > MAX_HASHTAG_COUNT) {
      textHashTagsInput.setCustomValidity('Количество хэш-тегов не может быть больше' + MAX_HASHTAG_COUNT);
    }
    if (hashtag.length > MAX_HASHTAG_LENGTH) {
      textHashTagsInput.setCustomValidity('Длина одного хэштега не может превышать 20 символов');
    } else if (!(/^[а-яА-ЯёЁa-zA-Z0-9]/).test(hashtag.charAt(1))) {
      textHashTagsInput.setCustomValidity('Строка после решётки должна состоять из букв и чисел и не может содержать иные символы');
    } else if (hashtag.charAt(0) !== '#') {
      textHashTagsInput.setCustomValidity('Хэштег должен начинаться с символа "#" ');
    } else if (hashtag.length < MIN_HASHTAG_SIMBOL) {
      textHashTagsInput.setCustomValidity('Слишком короткая запись');
    } else if (checkDuplicateHashTag(hashTags)) {
      textHashTagsInput.setCustomValidity('Есть повторяющиеся хэштеги');
    } else {
      textHashTagsInput.setCustomValidity('');
    }
  });

  textHashTagsInput.reportValidity();
}

const onCommentValidation = () => {
  const descriptionValue = descriptionElement.value;

  if (descriptionValue.length > MAX_COMMENT_LENGTH) {
    descriptionElement.setCustomValidity('Длина комментария не может превышать' + MAX_COMMENT_LENGTH + ' символов');
  } else {
    descriptionElement.setCustomValidity('');
  }
    
  descriptionElement.reportValidity();
}

const validateHashTags = () => {
  textHashTagsInput.addEventListener('input', onHashTagValidation);

  textHashTagsInput.addEventListener('blur', () => {
    document.body.addEventListener('keydown', onCancelEscKeydown);
  });

  textHashTagsInput.addEventListener('focus', () => {
    document.body.removeEventListener('keydown', onCancelEscKeydown);
  });

}

const validateComment = () => {
  descriptionElement.addEventListener('input', onCommentValidation);

  descriptionElement.addEventListener('blur', () => {
    document.body.addEventListener('keydown', onCancelEscKeydown);
  });
 
  descriptionElement.addEventListener('focus', () => {
    document.body.removeEventListener('keydown', onCancelEscKeydown);
  });
}

export const listernFormSubmit = () => {
  sendPhotoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(evt.target);
    sendData(() => {
      onMessageSuccess();
      closeModal();
    }, onMessageError, formData);
  });
};

export const initializeForm = () => {
  validateHashTags();
  validateComment();
  listernFormSubmit();
}
