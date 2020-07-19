/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

///////////////////////////////////////// SOLUTION 1 /////////////////////////////////////////
var addBinary = function (a, b) {
  if (a.length > b.length) {
    return getBinarySum(a, b);
  }
  return getBinarySum(b, a);
};

var getBinarySum = (firstNo, secondNo) => {
  var i = firstNo.length;
  var j = secondNo.length;
  var carry = 0;
  var sum = '';
  while (i > 0) {
    const a = parseInt(firstNo[i - 1]);
    const b = parseInt(secondNo[j - 1] || '0');
    sum = (carry ^ a ^ b) + sum;
    const contains2One = carry + a + b >= 2;
    if (contains2One) {
      carry = 1;
    } else {
      carry = 0;
    }
    i--;
    j--;
  }
  return carry === 1 ? '1' + sum : sum;
};

///////////////////////////////////////// SOLUTION 2 /////////////////////////////////////////
var addBinary = function (a, b) {
  let i = a.length;
  let j = b.length;
  let carry = 0;
  let sum = '';
  while (i > 0 || j > 0) {
    const num1 = parseInt(a[i - 1] || '0');
    const num2 = parseInt(b[j - 1] || '0');
    sum = (carry ^ num1 ^ num2) + sum;
    if (carry + num1 + num2 >= 2) {
      carry = 1;
    } else {
      carry = 0;
    }
    i--;
    j--;
  }
  return carry === 1 ? '1' + sum : sum;
};
