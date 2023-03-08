function stringLength(text, textМaxSize) {

  if (text.length <= textМaxSize){
    return true;
  }

  return false;
}

stringLength('проверяемая строка', 10);

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

// eslint-disable-next-line no-unused-vars
function getNums(str) {
  let res = '';
  for(let i = 0; i < str.length; i++) {
    if (str[i] >= '0' && str[i] <= '9') {
      res = res + str[i];
    }
  }
  if (res === '') {
    return NaN;
  }
  return +res;
}

getNums('2023 год');

function getString (n, str) {
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
}

function addStringSize (str, strMinSize, additionalStr) {
  if (str.length < strMinSize) {
    return getString(strMinSize - str.length, additionalStr) + str;
  } else {
    return str;
  }
}

addStringSize('q', 4, 'werty');


