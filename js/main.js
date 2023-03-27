const rnd25 = () => Math.round(Math.random() * 24 + 1);
const rnd200 = () => Math.round(Math.random() * 174 + 15);
const rnd6 = () => Math.round(Math.random() * 5 + 1);

const arMessage = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const rndMessage = () => arMessage [rnd6() - 1];

const arNames = [
  'Иван',
  'Александр',
  'Степан',
  'Валерий',
  'Афанасий',
  'Борис',
];

const rndNames = () => arNames [rnd6() - 1];

const getUserData = () => {
  // eslint-disable-next-line prefer-const
  let obj = {};
  obj.id = rnd25();
  obj.url = `photos/${rnd25()}.jpg`;
  obj.description = 'Какое-то описание фотографии.';
  obj.likes = rnd200();
  // eslint-disable-next-line prefer-const
  let objComment = {};
  objComment.id = rnd200(); //couldBeImproved
  objComment.avatar = `img/avatar-${rnd6()}.svg`;
  objComment.Message = rndMessage ();
  objComment.Names = rndNames ();
  obj.comments = [
    objComment
  ];
  return obj;
};

getUserData ();


