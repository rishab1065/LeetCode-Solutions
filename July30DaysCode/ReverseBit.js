/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */

///////////////////////////////////////// SOLUTION 1 /////////////////////////////////////////

var reverseBits = function (n) {
  console.log(typeof n);
  let num = 0;
  const binaryNum = n
    .toString(2)
    .split('')
    .map((num) => parseInt(num));
  while (binaryNum.length < 32) {
    binaryNum.unshift(0);
  }
  binaryNum.forEach((bits, index) => {
    if (bits === 1) {
      num += Math.pow(2, index);
    }
  });

  return num;
};

///////////////////////////////////////// SOLUTION 2 /////////////////////////////////////////

var reverseBits = function (n) {
  const binaryNum = n.toString(2).split('');
  while (binaryNum.length < 32) {
    binaryNum.unshift(0);
  }
  return parseInt(binaryNum.reverse().join(''), 2);
};

///////////////////////////////////////// SOLUTION 3 /////////////////////////////////////////
var reverseBits = function (n) {
  const binaryNum = n.toString(2).split('');
  return parseInt(
    new Array(32 - binaryNum.length)
      .fill(0)
      .concat(binaryNum)
      .reverse()
      .join(''),
    2
  );
};
