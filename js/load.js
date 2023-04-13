import {showImages} from './users-pictures.js';
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

    const randomPicturesButton = document.querySelector('.img-filters__button--random-pictures');
    const popularPicturesButton = document.querySelector('.img-filters__button--popular-pictures');
    const defaultPicturesButton = document.querySelector('.img-filters__button--default-pictures');
    const showRendomPicturesCallback = () => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      document.querySelector('.img-filters__button--random-pictures').classList.add('img-filters__button--active');
      const filteredPictures = filterRandomPictures(pictures);
      const debouncedShowImages = debounce(showImages);
      debouncedShowImages(filteredPictures);
    };
    randomPicturesButton.addEventListener('click', showRendomPicturesCallback);
    const showPopularPicturesCallback = () => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      document.querySelector('.img-filters__button--popular-pictures').classList.add('img-filters__button--active');
      const filteredPictures = filterPicturesByComments(pictures);
      const debouncedShowImages = debounce(showImages);
      debouncedShowImages(filteredPictures);
    };
    popularPicturesButton.addEventListener('click', showPopularPicturesCallback);
    const showDefaultPicturesCallback = () => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      document.querySelector('.img-filters__button--default-pictures').classList.add('img-filters__button--active');
      const debouncedShowImages = debounce(showImages);
      debouncedShowImages(pictures);
    };
    defaultPicturesButton.addEventListener('click', showDefaultPicturesCallback);
  })
  .catch((err) => {
    onError(err);
  });
export {createLoader};

function debounce (callback, timeoutDelay = 500) {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}
