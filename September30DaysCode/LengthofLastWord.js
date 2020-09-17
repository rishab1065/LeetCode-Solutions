/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(' ').slice(-1)[0].length;
};
