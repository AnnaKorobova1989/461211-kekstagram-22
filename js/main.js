let anyString = 'djdhgjhfdg';
let stringLength = 10;

let getStrMaxLength = function (str, strMaxLength) {
  return str.length <= strMaxLength;
}

getStrMaxLength(anyString, stringLength);

function getRandomIntInclusive(min, max) {
  if (min >= max) {
    alert('Задан неверный диапазон');
    return;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
  
getRandomIntInclusive(0, 10);
