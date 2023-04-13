const takeRnd25 = () => Math.round(Math.random() * 24 + 1);
const takeRnd200 = () => Math.round(Math.random() * 174 + 15);
const takeRnd6 = () => Math.round(Math.random() * 5 + 1);
const SUCCESS_SHOW_TIME = 5000;
const ALERT_SHOW_TIME = 5000;

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

const getArRndMessage = () => arMessages [takeRnd6() - 1];
const getArRndNames = () => arNames [takeRnd6() - 1];

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

export {takeRnd25};
export {takeRnd200};
export {takeRnd6};
export {getArRndMessage};
export {getArRndNames};
export {showAlert};
export {onSuccess};
