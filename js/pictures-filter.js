import {rnd25} from './util.js';
// document.querySelector('.img-filters__title').classList.remove('visually-hidden');

const filterPicturesByComments = (picturesArray) => [...picturesArray].sort((a, b) => b.comments.length - a.comments.length);

const filterRandomPictures = (picturesArray) => {
  const randomPicturesOfArray = [];
  while (randomPicturesOfArray.length < 10) {
    const randomIndex = rnd25() - 1;
    if (!randomPicturesOfArray.includes(picturesArray[randomIndex])) {
      randomPicturesOfArray.push(picturesArray[randomIndex]);
    }
  }
  return randomPicturesOfArray;
};

export {filterRandomPictures};
export {filterPicturesByComments};
