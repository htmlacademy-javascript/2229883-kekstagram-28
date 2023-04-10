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

// const formRequest = new FormData();
// const formLoader = (onSuccess, onError) => () => fetch(
//   'https://28.javascript.pages.academy/code-and-magick/data',
//   {
//     method: 'POST',
//     credentials: 'same-origin',
//     body: new formRequest(),
//   },
// )
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
//   })
//   .then((data) => {
//     onSuccess('Результат', data);
//   })
//   .catch((err) => {
//     onError(err);
//   });

// export {formLoader};
