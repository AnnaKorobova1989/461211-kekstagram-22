import {drawPhotos} from './render-photos.js';

const getData = () => {
    fetch('https://22.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((wizards) => {
      drawPhotos(wizards);
    });
}

getData();