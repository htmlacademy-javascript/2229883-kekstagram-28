import {showImages} from './users-pictures.js';
//import './welcome-pictures.js';
import {showPicturesOfRandoms} from './welcome-picture.js';

// fetch(
//   'https://28.javascript.pages.academy/kekstagram/data',
//   {
//     method: 'POST',
//     credentials: 'same-origin',
//     body: new FormData(),
//   },
// )
//   .then((response) => {
//     // eslint-disable-next-line no-console
//     console.log(response.status);
//     // eslint-disable-next-line no-console
//     console.log(response.ok);
//     return response.json();
//   })
//   .then((data) => {
//     // eslint-disable-next-line no-console
//     console.log('Результат', data);
//   })
//   .catch((err) => {
//     // eslint-disable-next-line no-console
//     console.error(err);
//   });

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

