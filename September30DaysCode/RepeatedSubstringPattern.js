/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  var i = 1;
  if (s.substr(0, s.length / 2) === s.substr(s.length / 2)) return true;
  while (i < s.length) {
    let result = false;

    if (s.length % i === 0 && s.lastIndexOf(s.substr(0, i)) !== -1) {
      result = isRepeatedSting(s, s.substr(0, i), s.length / 2);
    }
    if (result) {
      return true;
    }
    i++;
  }
  return false;
};

const isRepeatedSting = (str, pattern, halfLen) => {
  if (str.length === 0 || halfLen > str.length) {
    return true;
  }
  const patternLen = pattern.length;
  if (str.substr(0, patternLen) === pattern) {
    return isRepeatedSting(str.substr(patternLen), pattern, halfLen);
  }
  return false;
};
const ans = repeatedSubstringPattern('aba');
console.log('hello', ans);
