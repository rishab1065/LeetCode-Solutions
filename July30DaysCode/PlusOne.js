/**
 * @param {number[]} digits
 * @return {number[]}
 */

///////////////////////SOLUTION 1///////////////////////
// doesn't works when value is greater then int range eg [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
var plusOne = function (digits) {
  return (parseInt(digits.join('')) + 1)
    .toString()
    .split('')
    .map((num) => parseInt(num));
};

///////////////////////SOLUTION 2///////////////////////
// with carry take more space and time
var plusOne = function (digits) {
  var carry = 0;
  for (var i = 0; i < digits.length; i++) {
    const digit = digits[digits.length - i - 1];
    if (carry === 1 && digit < 9) {
      digits[digits.length - i - 1] = digit + 1;
      carry = 0;
      break;
    }
    if (carry === 1 && digit === 9) {
      digits[digits.length - i - 1] = 0;
    }
    if (digit === 9) {
      carry = 1;
      digits[digits.length - i - 1] = 0;
    } else {
      digits[digits.length - i - 1] = digit + 1;
      break;
    }
  }
  if (i === digits.length && carry === 1) {
    digits.unshift(1);
  }
  return digits;
};

///////////////////////SOLUTION 3///////////////////////
// without carry takes less space and time
var plusOne = function (digits) {
  for (var i = 0; i < digits.length; i++) {
    if (digits[digits.length - i - 1] < 9) {
      digits[digits.length - i - 1] = digits[digits.length - i - 1] + 1;
      break;
    }
    digits[digits.length - i - 1] = 0;
  }
  if (i === digits.length) {
    digits.unshift(1);
  }
  return digits;
};
