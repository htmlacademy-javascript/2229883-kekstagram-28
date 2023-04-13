
let showedCommentsAmount = 0;

const fragment = document.createDocumentFragment();
const commentTemplate = document.querySelector('#comment').content.querySelector('.social__comment');

const showBigPicture = (pictureData) => {
  showedCommentsAmount = 0;
  document.querySelector('.big-picture__img img').src = pictureData.url;
  document.querySelector('.likes-count').innerText = pictureData.likes;
  document.querySelector('.comments-count').innerText = pictureData.comments.length;
  document.querySelector('.social__caption').innerText = pictureData.description;

  for (let i = 0; i < 5; i++) {
    if (i > pictureData.comments.length - 1) {
      break;
    }
    const comment = pictureData.comments[i];
    const commentElement = commentTemplate.cloneNode(true);
    commentElement.querySelector('.social__picture').src = comment.avatar;
    commentElement.querySelector('.social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').innerText = comment.message;

    fragment.appendChild(commentElement);
    showedCommentsAmount++;
  }

  if (showedCommentsAmount >= pictureData.comments.length) {
    document.querySelector('.social__comments-loader').classList.add('hidden');
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
      commentElement.querySelector('.social__picture').alt = comment.name;
      commentElement.querySelector('.social__text').innerText = comment.message;
      fragment.appendChild(commentElement);
      showedCommentsAmount++;
      document.querySelector('.social__comments').appendChild(commentElement);
    }
    if (showedCommentsAmount >= pictureData.comments.length) {
      document.querySelector('.social__comments-loader').classList.add('hidden');
    }
    document.querySelector('.comments-count-showed').innerText = showedCommentsAmount;
  };

  document.querySelector('.social__comments-loader').addEventListener('click', addComments);


  const shownPicturesWindow = document.querySelector('.showPictures');
  const bodyModalWindow = document.querySelector('body');
  const addCommentsToPicture = document.querySelector('.social__comments-loader');
  const outOfPicture = document.querySelector('.cancelBigPicture');

  const closeBigPicture = () => {
    shownPicturesWindow.classList.add('hidden');
    bodyModalWindow.classList.remove('modal-open');
    showedCommentsAmount = 0;
    document.querySelector('.social__comments-loader').classList.remove('hidden');
    addCommentsToPicture.removeEventListener('click', addComments);
    // Отлючил правила линта, тк с ними невозможно убирать слушатели событий
    // eslint-disable-next-line no-use-before-define
    outOfPicture.removeEventListener('click', closeOnButton);
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', closeOnEsc);
  };

  const closeOnButton = () => {
    closeBigPicture();
  };

  const closeOnEsc = (event) => {
    if (event.key === 'Escape') {
      closeBigPicture();
    }
  };

  document.querySelector('.social__comments').replaceChildren(fragment);
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('keydown', closeOnEsc);
  document.querySelector('.cancelBigPicture').addEventListener('click', closeOnButton);
  document.querySelector('.showPictures').classList.remove('hidden');
};

const showPicturesOfRandoms = function (pictures) {
  const picturesOfRandoms = document.querySelectorAll('.picture__img');
  for(let i = 0; i < picturesOfRandoms.length; i++){
    picturesOfRandoms[i].addEventListener('click', (event) => {
      event.preventDefault();
      showBigPicture(pictures[i]);
    });
  }
};


export {showPicturesOfRandoms};
export {showBigPicture};
