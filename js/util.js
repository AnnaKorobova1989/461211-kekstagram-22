export {
  getRandomIntInclusive,
  getRandomArrayElement,
  isEscEvent,
  onCancelEscKeydown,
  showAlert,
  onMessageSuccess,
  onMessageError
};

const ALERT_SHOW_TIME = 5000;

const massageSuccessTemplate = document.querySelector('#success').content.querySelector('.success');
const massageErrorTemplate = document.querySelector('#error').content.querySelector('.error');
const mainSelector = document.querySelector('main');

//Вспом. функция - возвращает случайное целое число из заданного диапазона
const getRandomIntInclusive = function(min, max) {
  if (min >= max) {
    alert('Задан неверный диапазон');
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length-1)];
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const onCancelEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

const showAlert = (message) => {
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


const onMessageSuccess = () => {
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

const onMessageError = () => {
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





//Вспом. функция - сверяет длину строки с максимально возможным значением
/*let getStrMaxLength = function (str, strMaxLength) {
  return str.length <= strMaxLength;
}*/


//Вспом. функция, возвращающая массив чисел, перемешанных случайным образом
/*const randomIntNonRepeat = function(int) {
let arr = [];
j = 1;
for (let i = 1; i <= int; i++) {
arr.push(j++);
}
arr.sort(function(){
return Math.random() - 0.5;
});
return j;
}*/