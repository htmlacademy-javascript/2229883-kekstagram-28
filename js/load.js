import {showImages} from './users-pictures.js';
//import './welcome-pictures.js';
import {showPicturesOfRandoms} from './welcome-picture.js';
import {filterPicturesByComments} from './pictures-filter.js';
import {filterRandomPictures} from './pictures-filter.js';


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
    document.querySelector('.img-filters').classList.remove('img-filters--inactive');
    showImages(pictures);
    showPicturesOfRandoms(pictures);

    const randomPicturesButton = document.querySelector('.img-filters__button--random-pictures');
    const popularPicturesButton = document.querySelector('.img-filters__button--popular-pictures');
    const defaultPicturesButton = document.querySelector('.img-filters__button--default-pictures');
    randomPicturesButton.addEventListener('click', () => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      document.querySelector('.img-filters__button--random-pictures').classList.add('img-filters__button--active');
      const filteredPictures = filterRandomPictures(pictures);
      showImages(filteredPictures);
    });
    popularPicturesButton.addEventListener('click',() => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      document.querySelector('.img-filters__button--popular-pictures').classList.add('img-filters__button--active');
      const filteredPictures = filterPicturesByComments(pictures);
      showImages(filteredPictures);
    });
    defaultPicturesButton.addEventListener('click',() => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      document.querySelector('.img-filters__button--default-pictures').classList.add('img-filters__button--active');
      showImages(pictures);
    });
  })
  .catch((err) => {
    onError(err);
  });
export {createLoader};
