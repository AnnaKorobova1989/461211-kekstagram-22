export {
  getRandomIntInclusive,
  getRandomArrayElement,
  isEscEvent,
  onCancelEscKeydown
};

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