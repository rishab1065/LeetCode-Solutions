/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
var numsSameConsecDiff = function (N, K) {
  var nums = [];
  if (N === 1) {
    nums.push(0);
  }
  generateNumber(N, K, nums, '');
  return nums;
};

var generateNumber = function (N, K, nums, currNum) {
  if (currNum.length === N) {
    nums.push(parseInt(currNum, 10));
    return;
  }

  if (currNum.length === 0) {
    for (var i = 1; i <= 9; i++) {
      generateNumber(N, K, nums, currNum + i);
    }
  } else {
    for (var i = 0; i <= 9; i++) {
      const num = parseInt(currNum[currNum.length - 1], 10);
      if (num + K === i) {
        generateNumber(N, K, nums, currNum + i);
      } else if (num - K === i) {
        generateNumber(N, K, nums, currNum + i);
      }
    }
  }
};

numsSameConsecDiff(2, 1);
