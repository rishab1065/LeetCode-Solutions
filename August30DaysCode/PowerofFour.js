/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
  if (num === 1) {
    return true;
  }
  if (num % 4 !== 0) {
    return false;
  }
  while (num > 1) {
    num = num / 4;
  }
  return num === 1 ? true : false;
};
