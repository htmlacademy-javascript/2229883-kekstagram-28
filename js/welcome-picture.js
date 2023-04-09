import {getUserData} from './util.js';

let showedCommentsAmount = 0;

const fragment = document.createDocumentFragment();
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const showBigPicture = () => {
  showedCommentsAmount = 0;
  const pictureData = getUserData();
  document.querySelector('.big-picture__img img').src = pictureData.url;
  document.querySelector('.likes-count').innerText = pictureData.likes;
  document.querySelector('.comments-count').innerText = pictureData.comments.length;
  document.querySelector('.social__caption').innerText = pictureData.description;

  for (let i = 0; i < 5; i++) {
    if (i >= pictureData.comments.length) {
      break;
    }
    const comment = pictureData.comments[i];
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.Names;
    commentElement.querySelector('.social__text').innerText = comment.Message;

    fragment.appendChild(commentElement);
    showedCommentsAmount++;

  }
  document.querySelector('.comments-count-showed').innerText = showedCommentsAmount;

  const addComments = () => {
    const commentsToShowAmount = showedCommentsAmount + 5;
    for (let i = showedCommentsAmount; i < commentsToShowAmount; i++) {
      if (i >= pictureData.comments.length) {
        break;
      }
      const comment = pictureData.comments[i];
      const commentElement = commentTemplate.cloneNode(true);
      commentElement.querySelector('.social__picture').src = comment.avatar;
      commentElement.querySelector('.social__picture').alt = comment.Names;
      commentElement.querySelector('.social__text').innerText = comment.Message;
      fragment.appendChild(commentElement);
      showedCommentsAmount++;
      document.querySelector('.social__comments').appendChild(commentElement);
    }
    document.querySelector('.comments-count-showed').innerText = showedCommentsAmount;
  };

  document.querySelector('.social__comments-loader').addEventListener('click', addComments);

  const closeBigPicture = () => {
    document.querySelector('.showPictures').classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    showedCommentsAmount = 0;
    document.querySelector('.social__comments-loader').removeEventListener('click', addComments);
    document.querySelector('.cancelBigPicture').removeEventListener('click', closeBigPicture);
    document.removeEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeBigPicture();
      }
    });
  };
  document.querySelector('.social__comments').replaceChildren(fragment);
  // document.querySelector('.social__comment-count').classList.add('hidden');
  // document.querySelector('.comments-loader').classList.add('hidden');
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeBigPicture();
    }
  });
  document.querySelector('.cancelBigPicture').addEventListener('click', closeBigPicture);
  document.querySelector('.showPictures').classList.remove('hidden');
};

document.querySelector('.img-upload__input').addEventListener('click', (event) => {
  event.preventDefault();
  showBigPicture();
});

