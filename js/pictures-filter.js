import {takeRnd25} from './util.js';

const filterPicturesByComments = (picturesArray) => [...picturesArray].sort((a, b) => b.comments.length - a.comments.length);

const filterRandomPictures = (picturesArray) => {
  const randomPicturesOfArray = [];
  while (randomPicturesOfArray.length < 10) {
    const randomIndex = takeRnd25() - 1;
    if (!randomPicturesOfArray.includes(picturesArray[randomIndex])) {
      randomPicturesOfArray.push(picturesArray[randomIndex]);
    }
  }
  return randomPicturesOfArray;
};

export {filterRandomPictures};
export {filterPicturesByComments};
