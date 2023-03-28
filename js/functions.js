const isStringTooLong = (text, textМaxSize) => (text.length <= textМaxSize) ? 'Go on!' : 'Extra symbols detected';

isStringTooLong('проверяемая строка', 10);

function isStrPalindrome(str) {
  const n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str.charAt(i) !== str.charAt(n - 1 - i)){
      return false;
    }
  }
  return true;
}

isStrPalindrome('топот');

const getStringNumbers = (str) => {
  let result = '';
  let char;
  for (char of str) {
    if ((parseInt(char, 10)) >= 0 && (parseInt(char, 10)) <= 9) {
      result += char;
    }
  }
  return result === '' ? NaN : +result;
};

getStringNumbers('2023 год');

const addStringSize = (str, strMinSize, additionalStr) => {
  // eslint-disable-next-line no-shadow
  const countStringSigns = (n, str) => {
    let counter = 0;
    let emptyString = '';
    while (emptyString.length < n) {
      emptyString = emptyString + str[counter];
      counter++;
      if (counter >= str.length) {
        counter = 0;
      }
    }
    return emptyString;
  };
  return str.length < strMinSize ? countStringSigns(strMinSize - str.length, additionalStr) + str : str;
};

addStringSize ('q', 4, 'werty');

export {isStringTooLong};
export {isStrPalindrome};
export {getStringNumbers};
export {addStringSize};
