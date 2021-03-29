export {
  isEscEvent,
  onCancelEscKeydown
};

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const onCancelEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.stopPropagation();
  }
};

//Вспом. функция, возвращающая массив чисел, перемешанных случайным образом
export const randomIntNonRepeat = function(int) {
  let arr = [];
  let j = 0;

  for (let i = 0; i <= int; i++) {
    arr.push(j++);
  }

  arr.sort(function(){
    return Math.random() - 0.5;
  });

  return arr;
}
