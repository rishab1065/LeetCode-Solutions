/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  if (nums.length < 1) return -1;

  return nums.sort((a, b) => a - b)[nums.length - k];
};
