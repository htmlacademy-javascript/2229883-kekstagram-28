import {showPicturesOfRandoms} from './welcome-picture.js';

const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const removePicture = () => {
  const picturesArr = document.querySelectorAll('.pictures .picture');
  picturesArr.forEach((picture) => {
    picture.remove();
  });
};

const showImages = (photosData) => {
  const fragment = document.createDocumentFragment();

  photosData.forEach((photo) => {
    const pictureElement = pictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = photo.url;
    const pictureLikes = pictureElement.querySelector('.picture__likes');
    const pictureComments = pictureElement.querySelector('.picture__comments');

    pictureLikes.textContent = photo.likes;
    pictureComments.textContent = photo.comments.length;

    fragment.appendChild(pictureElement);
  });

  removePicture();
  pictures.appendChild(fragment);

  showPicturesOfRandoms(photosData);

};

export {showImages};
