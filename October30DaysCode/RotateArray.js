/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (nums.length === k) return nums;
  k = k % nums.length;
  while (k--) {
    nums.unshift(nums.pop());
  }
  return nums;
};
