/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  for (var i = 0; i < nums.length; ) {
    const lastIndex = nums.lastIndexOf(nums[i]);
    if (lastIndex !== -1 && lastIndex !== i) {
      nums.splice(lastIndex, 1);
      nums.splice(i, 1);
    } else {
      i++;
    }
  }
  return nums;
};

const ans = singleNumber([1, 2, 1, 3, 2, 5]);
console.log(ans);
