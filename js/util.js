const rnd25 = () => Math.round(Math.random() * 24 + 1);
const rnd200 = () => Math.round(Math.random() * 174 + 15);
const rnd6 = () => Math.round(Math.random() * 5 + 1);

const arMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const arNames = [
  'Иван',
  'Александр',
  'Степан',
  'Валерий',
  'Афанасий',
  'Борис',
];

const rndMessage = () => arMessages [rnd6() - 1];
const rndNames = () => arNames [rnd6() - 1];

//legacy_code
const getUserData = () => {
  const obj = {};
  obj.id = rnd25();
  obj.url = `photos/${rnd25()}.jpg`;
  obj.description = 'Какое-то описание фотографии.';
  obj.likes = rnd200();
  const commentsAmount = rnd25();
  obj.comments = [];
  for (let i = 0; i < commentsAmount; i++) {
    const objComment = {};
    objComment.id = rnd200(); //couldBeImproved
    objComment.avatar = `img/avatar-${rnd6()}.svg`;
    objComment.Message = rndMessage ();
    objComment.Names = rndNames ();
    obj.comments.push(objComment);
  }
  return obj;
};

const ALERT_SHOW_TIME = 5000;
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

const SUCCESS_SHOW_TIME = 5000;
const onSuccess = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'green';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, SUCCESS_SHOW_TIME);
};

export {rnd25};
export {rnd200};
export {rnd6};
export {rndMessage};
export {rndNames};
export {getUserData};
export {showAlert};
export {onSuccess};
