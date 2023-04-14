import {showAlert} from './util.js';
import {onSuccess} from './util.js';

const previewImage = document.querySelector('.img-upload__preview img');
const valueElement = document.querySelector('.scale__control--value');
const buttonSmaller = document.querySelector('.scale__control--smaller');
const buttonBigger = document.querySelector('.scale__control--bigger');

const resetForm = () => {
  document.querySelector('.img-upload__form').reset();
  previewImage.src = 'img/upload-default-image.jpg';
  updatePreview(100);
  previewImage.style.filter = 'none';
};

const closePictureEditor = () => {
  resetForm();
  document.querySelector('.img-filters__title').classList.add('visually-hidden');
  document.querySelector('.pictures__title').classList.add('visually-hidden');
  document.querySelector('.img-upload__title').classList.add('visually-hidden');
  document.querySelector('.img-upload__input').classList.add('visually-hidden');
  document.querySelector('.img-upload__overlay').classList.add('hidden');
  // Отлючил правила линта, тк с ними невозможно убирать слушатели событий
  // eslint-disable-next-line no-use-before-define
  document.removeEventListener('keydown', closeFormOnEscCallback);
};

const closeFormOnEscCallback = (event) => {
  if (event.key === 'Escape' && document.activeElement !== document.querySelector('.text__hashtags') && document.activeElement !== document.querySelector('.text__description')) {
    closePictureEditor();
  }
};

const showDownloadedPicture = () => {
  document.querySelector('.img-upload__title').classList.remove('visually-hidden');
  document.querySelector('.img-upload__input').classList.remove('visually-hidden');
  document.querySelector('.img-upload__overlay').classList.remove('hidden');
  document.querySelector('.img-upload__effect-level').classList.add('visually-hidden');
  document.querySelector('.img-upload__cancel').addEventListener('click', closePictureEditor);
  document.addEventListener('keydown', closeFormOnEscCallback);
};

document.querySelector('.img-upload__input').addEventListener('change', () => {
  showDownloadedPicture();
});

valueElement.value = `${100 }%`;


const updateValue = (step) => {
  const currentValue = parseInt(valueElement.value, 10);
  const newValue = Math.min(Math.max(currentValue + step, 25), 100);
  valueElement.value = `${newValue}%`;
  updatePreview(newValue);
};

buttonBigger.addEventListener('click', () => {
  updateValue(25);
});

buttonSmaller.addEventListener('click', () => {
  updateValue(-25);
});

function updatePreview(scaleValue) {
  previewImage.style.transform = `scale(${scaleValue / 100})`;
}

const sliderEffectElement = document.querySelector('.img-upload__effect-level');
const valueEffectElement = document.querySelector('.effect-level__value');


valueEffectElement.value = 0;

noUiSlider.create(sliderEffectElement , {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.01,
  connect: 'lower',
});

const setSliderRange = (maxValue) => {
  sliderEffectElement.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: maxValue
    },
    start: maxValue
  }, false);
};

let isPx = false;
let effectName = '';
sliderEffectElement.noUiSlider.on('update', () => {
  valueEffectElement.value = sliderEffectElement.noUiSlider.get();
  previewImage.style.filter = `${effectName}(${valueEffectElement.value}${isPx ? 'px' : ''})`;
});

const noEffect = document.querySelector('.noEffect');
noEffect.addEventListener('click', () => {
  effectName = '';
  isPx = false;
  previewImage.style.filter = null;
  previewImage.classList = ('effects__preview--none');
  sliderEffectElement.classList.add('visually-hidden');
});

const chromeEffect = document.querySelector('.chromeEffect');
chromeEffect.addEventListener('click', () => {
  sliderEffectElement.classList.remove('visually-hidden');
  setSliderRange(1);
  effectName = 'grayscale';
  isPx = false;
  previewImage.style.filter = `${effectName}(${valueEffectElement.value})`;
  previewImage.classList.add('effects__preview--chrome');
});

const sepiaEffect = document.querySelector('.sepiaEffect');
sepiaEffect.addEventListener('click', () => {
  sliderEffectElement.classList.remove('visually-hidden');
  setSliderRange(1);
  effectName = 'sepia';
  isPx = false;
  previewImage.style.filter = `${effectName}(${valueEffectElement.value})`;
  previewImage.classList.add('effects__preview--sepia');
});

const marvinEffect = document.querySelector('.marvinEffect');
marvinEffect.addEventListener('click', () => {
  sliderEffectElement.classList.remove('visually-hidden');
  setSliderRange(1);
  effectName = 'invert';
  isPx = false;
  previewImage.style.filter = `${effectName}(${valueEffectElement.value})`;
  previewImage.classList.add('effects__preview--marvin');
});

const phobosEffect = document.querySelector('.phobosEffect');
phobosEffect.addEventListener('click', () => {
  sliderEffectElement.classList.remove('visually-hidden');
  setSliderRange(3);
  effectName = 'blur';
  isPx = true;
  previewImage.style.filter = `${effectName}(${valueEffectElement.value}px)`;
  previewImage.classList.add('effects__preview--phobos');
});

const heatEffect = document.querySelector('.heatEffect');
heatEffect.addEventListener('click', () => {
  sliderEffectElement.classList.remove('visually-hidden');
  setSliderRange(3);
  effectName = 'brightness';
  isPx = false;
  previewImage.style.filter = `${effectName}(${valueEffectElement.value})`;
  previewImage.classList.add('effects__preview--heat');
});

window.onload = function () {
  const form = document.querySelector('.img-upload__form');
  const elem = document.querySelector('.text__hashtags');

  const pristine = new Pristine(form);

  pristine.addValidator(elem, (value) => {
    const hashtags = value.length ? value.split(' ').map((hashtag) => hashtag.toLowerCase()) : [];
    let isValid = true;
    if (hashtags.length > 5) {
      isValid = false;
    }

    hashtags.forEach((hashtag, i) => {
      if (hashtags.includes(hashtag, i + 1)) {
        isValid = false;
      }
    });

    const hashtagRegexp = /^#[a-zа-яё0-9]{1,19}$/i;
    hashtags.forEach((hashtag) => {
      if (!hashtagRegexp.test(hashtag) || hashtag.length > 20) {
        isValid = false;
      }
    });

    return isValid;
  }, 'Error', 5, false);

  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const valid = pristine.validate(elem);
    if (!valid) {
      elem.value = 'Некорректный хэштег';
      elem.style.backgroundColor = 'tomato';
    } else {
      elem.style.backgroundColor = '#fff';
      const formRequest = new FormData(evt.target);
      fetch(
        'https://28.javascript.pages.academy/kekstagram',
        {
          method: 'POST',
          body: formRequest,
        },
      )
        .then((response) => {
          if (response.ok) {
            closePictureEditor();
            onSuccess();
          } else {
            throw new Error('Не удалось отправить фото');
          }
        })
        .catch((err) => {
          showAlert(err.message);
        });
    }
  });
};
