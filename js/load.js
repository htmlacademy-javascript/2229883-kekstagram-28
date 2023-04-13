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

    const setFilter = (callback) => (evt) => {
      document.querySelector('.img-filters__button--active').classList.remove('img-filters__button--active');
      evt.target.classList.add('img-filters__button--active');
      let filteredPictures;
      switch (evt.target.id) {
        case 'filter-default':
          filteredPictures = pictures;
          break;
        case 'filter-random':
          filteredPictures = filterRandomPictures(pictures);
          break;
        case 'filter-discussed':
          filteredPictures = filterPicturesByComments(pictures);
          break;
      }
      callback(filteredPictures);
    };
    const debouncedClickOnFilter = setFilter(debounce(showImages));
    randomPicturesButton.addEventListener('click', debouncedClickOnFilter);
    popularPicturesButton.addEventListener('click', debouncedClickOnFilter);
    defaultPicturesButton.addEventListener('click', debouncedClickOnFilter);
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
