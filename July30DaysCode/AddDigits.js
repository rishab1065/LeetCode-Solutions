/**
 * @param {number} num
 * @return {number}
 */

var addDigits = function (num) {
  while (num >= 10) {
    num = num
      .toString()
      .split('')
      .reduce((acc, current) => parseInt(acc) + parseInt(current));
  }
  return num;
};

var addDigits = function (num) {
  if (num < 10) return num;
  return num % 9 === 0 ? 9 : num % 9;
};

console.log(addDigits(0));
