/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  var arr = [];

  while (num >= 0) {
    let binary = num.toString(2);
    binary = binary.replace(/0/g, '');
    arr.unshift(binary.length);
    num--;
  }
  return arr;
};
