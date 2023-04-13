const takeRnd25 = () => Math.round(Math.random() * 24 + 1);
const takeRnd200 = () => Math.round(Math.random() * 174 + 15);
const takeRnd6 = () => Math.round(Math.random() * 5 + 1);

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

const showAlert = () => {
  const successElement = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
  const closeButton = successElement.querySelector('.error__button');

  document.body.append(successElement);

  const closeSuccessMessage = () => {
    successElement.remove();
    // Отлючил правила линта, тк с ними невозможно убирать слушатели событий
    // eslint-disable-next-line no-use-before-define
    closeButton.removeEventListener('click', closeSuccesOnButtonClick);
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', closeSuccessOnEsc);
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('click', closeSuccessOnClickOutside);
  };

  const closeSuccesOnButtonClick = () => {
    closeSuccessMessage();
  };

  const closeSuccessOnEsc = (evt) => {
    evt.stopImmediatePropagation();

    if (evt.key === 'Escape') {
      closeSuccessMessage();
    }
  };

  const closeSuccessOnClickOutside = (evt) => {
    const isClosest = evt.target.closest('.error__inner');
    if (!isClosest) {
      closeSuccessMessage();
    }
  };


  closeButton.addEventListener('click', closeSuccesOnButtonClick);
  document.addEventListener('keydown', closeSuccessOnEsc);
  document.addEventListener('click', closeSuccessOnClickOutside);
};

const onSuccess = () => {
  const successElement = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
  const closeButton = successElement.querySelector('.success__button');

  document.body.append(successElement);

  const closeSuccessMessage = () => {
    successElement.remove();
    // Отлючил правила линта, тк с ними невозможно убирать слушатели событий
    // eslint-disable-next-line no-use-before-define
    closeButton.removeEventListener('click', closeSuccesOnButtonClick);
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('keydown', closeSuccessOnEsc);
    // eslint-disable-next-line no-use-before-define
    document.removeEventListener('click', closeSuccessOnClickOutside);
  };

  const closeSuccesOnButtonClick = () => {
    closeSuccessMessage();
  };

  const closeSuccessOnEsc = (evt) => {
    if (evt.key === 'Escape') {
      closeSuccessMessage();
    }
  };

  const closeSuccessOnClickOutside = (evt) => {
    const isClosest = evt.target.closest('.success__inner');
    if (!isClosest) {
      closeSuccessMessage();
    }
  };


  closeButton.addEventListener('click', closeSuccesOnButtonClick);
  document.addEventListener('keydown', closeSuccessOnEsc);
  document.addEventListener('click', closeSuccessOnClickOutside);
};

export {takeRnd25};
export {takeRnd200};
export {takeRnd6};
export {getArRndMessage};
export {getArRndNames};
export {showAlert};
export {onSuccess};
