/* global _:readonly */
import './img-upload.js';
import {drawPhotos} from './render-photos.js';
import {initializeForm} from './form.js';
import {getData} from './api.js';
import {showAlert} from './messages.js';
import {getNotRepeatPicture,
  getSortedPicturesByComment,
  setFilterRandomPicture,
  setFilterDiscussedPicture, setFilterDefaultPicture} from './filters.js';

const RERENDER_DELAY = 500;


getData((picture) => {
  drawPhotos(picture);
  setFilterDefaultPicture(_.throttle(() => drawPhotos(picture)), RERENDER_DELAY);
  setFilterRandomPicture(_.throttle(() => drawPhotos(getNotRepeatPicture(picture))), RERENDER_DELAY);
  setFilterDiscussedPicture(_.throttle(() => drawPhotos(getSortedPicturesByComment(picture))), RERENDER_DELAY);
    
}, showAlert);
initializeForm();

