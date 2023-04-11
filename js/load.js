import {showImages} from './users-pictures.js';
//import './welcome-pictures.js';
import {showPicturesOfRandoms} from './welcome-picture.js';


const createLoader = (onSuccess, onError) => () => fetch(
  'https://28.javascript.pages.academy/kekstagram/data',
  {
    method: 'GET',
    credentials: 'same-origin',
  },
)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }

    throw new Error(`${response.status} ${response.statusText}`);
  })
  .then((pictures) => {
    onSuccess(pictures);
    showImages(pictures);
    showPicturesOfRandoms(pictures);
  })
  .catch((err) => {
    onError(err);
  });
export {createLoader};
