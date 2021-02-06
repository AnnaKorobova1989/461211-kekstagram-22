let anyString = 'djdhgjhfdg';
let stringLength = 10;

let getStrMaxLength = function (str, strMaxLength) {
  if (str.length <= strMaxLength) {
    return true;
  } else {
    return false;
  }
}

getStrMaxLength(anyString, stringLength);

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min >= max) {
    alert('Задан неверный диапазон');
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
  
const minInt = 0;
const maxInt = 10;
  
getRandomIntInclusive(minInt, maxInt);