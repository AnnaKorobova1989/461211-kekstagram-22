import {isEscEvent} from './util.js';

const ALERT_SHOW_TIME = 5000;

const massageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const massageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const mainSelector = document.querySelector('main');

export const showAlert = (message) => {
  const alertContainer = document.createElement('div');

  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}
  
export const onMessageSuccess = () => {
  const massageSuccess = massageSuccessTemplate.cloneNode(true);

  const successButton = massageSuccess.querySelector('.success__button');
  mainSelector.appendChild(massageSuccess);
  successButton.addEventListener('click', () => {
    mainSelector.removeChild(massageSuccess);
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt)) {
      mainSelector.removeChild(massageSuccess);
    }
  });
}
  
export const onMessageError = () => {
  const messageError = massageErrorTemplate.cloneNode(true);
  
  const errorButton = messageError.querySelector('.error__button');
  mainSelector.classList.add('modal-open');
  mainSelector.appendChild(messageError);
  errorButton.addEventListener('click', () => {
    mainSelector.removeChild(messageError);
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscEvent(evt)) {
      mainSelector.removeChild(messageError);
    }
  });
}
  