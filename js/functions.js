function stringLength(text, textМaxSize) {
  if (text.length <= textМaxSize)
    return true;
  return false;
}

stringLength('проверяемая строка', 10)

function isStrPalindrome(str) {
  let n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str.charAt(i) !== str.charAt(n - 1 - i))
      return false;
  }
  return true;
}

isStrPalindrome('топот')

function getNum(x) {
  const parsed = parseInt(x);
  if (isNaN(parsed)) { return 0; }
  return parsed;
}

getNum('2023 год')

function filesLocation(str, textМaxSize) {
  if (str = str, str.length <= textМaxSize)
    return str;
    alert ('Error')
}

filesLocation('диск D', 10)
