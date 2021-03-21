import {drawPhotos} from './render-photos.js';
import {showAlert} from './util.js';
import {closeModal} from './img-upload.js';
import {setUserFormSubmit} from './validation-form.js'


export const getData = () => {
  return fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => {
        if (response.ok) {
            return response.json();
        }

    throw new Error(`${response.status} ${response.statusText}`);

    })
      .then((pictures) => {
        drawPhotos(pictures);
  })
      .catch((err) => {
          showAlert('Не удалось загрузить данные с сервера. Попробуйте перезагрузить страницу');
      })
}

getData();

setUserFormSubmit(closeModal);
