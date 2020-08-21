/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  return A.sort((a, b) => {
    if (a % 2 === 0 && b % 2 !== 0) {
      return -1;
    } else if (a % 2 !== 0 && b % 2 === 0) {
      return 1;
    } else {
      return 0;
    }
  });
};
