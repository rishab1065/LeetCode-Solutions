/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  var left = 0;
  var right = 0;
  var maxLen = 0;
  var i = 0;
  if (s.length === 0 || s.length === 1) {
    return 0;
  }
  while (i < s.length) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxLen = Math.max(maxLen, left * 2);
    } else if (right >= left) {
      left = 0;
      right = 0;
    }

    i++;
  }
  left = 0;
  right = 0;
  i = s.length - 1;
  while (i >= 0) {
    if (s[i] === '(') {
      left++;
    } else {
      right++;
    }
    if (left === right) {
      maxLen = Math.max(maxLen, left * 2);
    } else if (left >= right) {
      left = 0;
      right = 0;
    }

    i--;
  }
  return maxLen;
};
longestValidParentheses('()))()()(())(()');
