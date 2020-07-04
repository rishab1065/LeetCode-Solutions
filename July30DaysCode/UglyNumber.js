/**
 * @param {number} n
 * @return {number}
 */

/////////////////////////////////////////Solution 1//////////////////////////////////
var nthUglyNumber = function (n) {
  var uglyNumbers = [];
  var x = 1;
  var count = 0;

  while (count < n) {
    var i = x;

    i = reduceNumber(i, 2);
    i = reduceNumber(i, 3);
    i = reduceNumber(i, 5);

    if (i === 1) {
      uglyNumbers.push(x);
      count++;
    }
    x++;
  }
  return x - 1;
};

var reduceNumber = (i, factor) => {
  if (i === 1) return i;

  while (i % factor == 0) {
    i = i / factor;
  }
  return i;
};
/////////////////////////////////////////Solution 2//////////////////////////////////
var nthUglyNumber = function (n) {
  var uglyNumbers = [1];
  var x = 1;
  var u1 = 0;
  var u2 = 0;
  var u3 = 0;

  while (x < n) {
    var nextUglyNumber = Math.min(
      uglyNumbers[u1] * 2,
      uglyNumbers[u2] * 3,
      uglyNumbers[u3] * 5
    );
    uglyNumbers.push(nextUglyNumber);
    if (nextUglyNumber === uglyNumbers[u1] * 2) {
      u1++;
    }
    if (nextUglyNumber === uglyNumbers[u2] * 3) {
      u2++;
    }
    if (nextUglyNumber === uglyNumbers[u3] * 5) {
      u3++;
    }
    x++;
  }
  return uglyNumbers.pop();
};
