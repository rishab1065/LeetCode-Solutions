/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.trim() === '') {
    return true;
  }
  s = s.replace(/[^a-zA-Z0-9/s]/g, '');
  var i = 0;
  j = s.length - 1;
  var isPalindrome = true;
  while (i < j) {
    if (s[i].toLowerCase() === s[j].toLowerCase()) {
      i++;
      j--;
    } else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};
