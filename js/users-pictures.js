const pictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// временные данные для разработки
const photosData = [
  {
    url: 'https://picsum.photos/id/1/200/300',
    likes: 15,
    comments: 3
  },
  {
    url: 'https://picsum.photos/id/2/200/300',
    likes: 20,
    comments: 5
  },
  {
    url: 'https://picsum.photos/id/3/200/300',
    likes: 10,
    comments: 2
  }
];

const fragment = document.createDocumentFragment();

photosData.forEach((photo) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const pictureImage = pictureElement.querySelector('.picture__img');
  const pictureLikes = pictureElement.querySelector('.picture__likes');
  const pictureComments = pictureElement.querySelector('.picture__comments');

  pictureImage.src = photo.url;
  pictureLikes.textContent = photo.likes;
  pictureComments.textContent = photo.comments;

  fragment.appendChild(pictureElement);
});

pictures.appendChild(fragment);
