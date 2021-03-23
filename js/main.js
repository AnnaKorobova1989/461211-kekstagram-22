import './img-upload.js';
import {drawPhotos} from './render-photos.js';
import {initializeForm} from './form.js';
import {getData} from './api.js';
import {showAlert} from './messages.js';


getData(drawPhotos, showAlert);
initializeForm();

