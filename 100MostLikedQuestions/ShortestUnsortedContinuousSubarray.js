/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  var firstIndex = 0;
  var lastIndex = nums.length - 1;
  var newNums = [...nums].sort((a, b) => a - b);
  for (var i = 0; i < nums.length; i++) {
    if (newNums[i] !== nums[i]) {
      firstIndex = i;
      break;
    }
  }

  for (var i = nums.length - 1; i > 0; i--) {
    if (newNums[i] !== nums[i]) {
      lastIndex = i;
      break;
    }
  }
  console.log(firstIndex, lastIndex);
  const newNums2 = nums.slice(firstIndex, lastIndex + 1);
  return JSON.stringify(newNums2) === JSON.stringify(newNums)
    ? 0
    : newNums2.length;
};

const ans = findUnsortedSubarray([2, 1]);
console.log(ans);
