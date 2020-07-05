/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
/////////////////////// SOLUTION 1 //////////////////////////
var hammingDistance = function (x, y) {
  const b3 = getBinary(x ^ y);
  // return (b3.match(new RegExp('1', 'g')) || []).length; ==> takes more time and memory
  return (b3.replace(new RegExp('0', 'g'), '') || []).length;
};

var getBinary = function (num) {
  var binary = '';
  while (num > 0) {
    binary = (num % 2) + binary;
    num = Math.floor(num / 2);
  }
  console.log(binary);
  return binary;
};

/////////////////////// SOLUTION 2 //////////////////////////
var hammingDistance = function (x, y) {
  const b3 = (x ^ y).toString(2); // TIL - argument in toString converts number to binary string, no need for sperate function
  return (b3.replace(new RegExp('0', 'g'), '') || []).length;
};
