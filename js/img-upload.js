import {isEscEvent} from './util.js';

const STEP_SIZE_PHOTO = 25;
const MIN_PHOTO_SIZE = 25;
const MAX_PHOTO_SIZE =100;

const imgEdit = document.querySelector('.img-upload__overlay');
const closeBtn = document.querySelector('#upload-cancel');
const uploadButton = document.querySelector('.img-upload__input');

const imgUploadScale = document.querySelector('.img-upload__scale');
const controlValue = document.querySelector('.scale__control--value');
const photoPreview = document.querySelector('.img-upload__preview').querySelector('img');

let photoSize = 100;

const slider = document.querySelector('.effect-level__slider');
const effectList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');

const SLIDER_OPTIONS = {
  none: {
    options: {},
    effect: 'none',
    measurement: '',
  },
  chrome: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    effect: 'grayscale',
    measurement: '',
  },
  sepia: {
    options: {
      range: {
        min: 0,
        max: 1,
      },
      start: 1,
      step: 0.1,
    },
    effect: 'sepia',
    measurement: '',
  },
  marvin: {
    options: {
      range: {
        min: 0,
        max: 100,
      },
      start: 100,
      step: 1,
    },
    effect: 'invert',
    measurement: '%',
  },
  phobos: {
    options: {
      range: {
        min: 0,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    effect: 'blur',
    measurement: 'px',
  },
  heat: {
    options: {
      range: {
        min: 1,
        max: 3,
      },
      start: 3,
      step: 0.1,
    },
    effect: 'brightness',
    measurement: '',
  },
};

const resetScale = function(){
  controlValue.value =`${MAX_PHOTO_SIZE}%`;
  photoPreview.style.transform = 'none';
}

const resetSlider = function() {
  resetScale();
  photoPreview.style.filter = 'none';
}

uploadButton.addEventListener('change', () => {
  window.noUiSlider.create(slider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 80,
    step: 1,
    connect: 'lower',
    format: {
      to: function (value) {
        if (Number.isInteger(value)) {
          return value.toFixed(0);
        }
        return value.toFixed(1);
      },
      from: function (value) {
        return parseFloat(value);
      },
    },
  });

  effectList.addEventListener('click', (evt) => {
    if (evt.target.tagName === 'SPAN') {
      const className = evt.target.classList[1];
      const modifier = className.split('--')[1];
      const isModifierNone = modifier === 'none';
      const filter = SLIDER_OPTIONS[modifier];
    
      photoPreview.className = '';
      photoPreview.classList.add(className);
      isModifierNone ? effectLevel.classList.add('hidden') : effectLevel.classList.remove('hidden');
    
      slider.noUiSlider.updateOptions(filter.options);
    
      slider.noUiSlider.on('update', (values, handle) => {
        effectLevelValue.value = values[handle];
        photoPreview.style.filter =`${filter.effect}` + (isModifierNone ? '' : `(${effectLevelValue.value}${filter.measurement})`);
      })
    }
  });
  openModal();
});

const openModal = function() {
  imgEdit.classList.remove('hidden');
  document.body.classList.add('modal-open');

  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', onEscapeKayDown);
};

const closeModal = function() {
  imgEdit.classList.add('hidden');
  document.body.classList.remove('modal-open');

  closeBtn.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', onEscapeKayDown);

  resetSlider();
  slider.noUiSlider.destroy();
}

const onEscapeKayDown = function (evt) {
  if(isEscEvent(evt)) {
    closeModal();
  }
}

const reducesSizeImg = () => {
  if (photoSize > MIN_PHOTO_SIZE) {
    photoSize -= STEP_SIZE_PHOTO;
    photoPreview.style.transform = `scale(0.${photoSize})`;
  }
  controlValue.value = `${photoSize}%`;
}
  
const increasesSizeImg = () => {
  if (photoSize < MAX_PHOTO_SIZE) {
    photoSize += STEP_SIZE_PHOTO;
    photoPreview.style.transform = `scale(0.${photoSize})`;
  }
  if (photoSize === MAX_PHOTO_SIZE) {
    photoPreview.style.transform = 'scale(1)';
  }
  controlValue.value = `${photoSize}%`;
}
  
imgUploadScale.addEventListener('click', (evt) => {
  const className = evt.target.classList[1];
  if (className === 'scale__control--smaller') {
    reducesSizeImg()
  }
  if (className === 'scale__control--bigger') {
    increasesSizeImg()
  }
});
