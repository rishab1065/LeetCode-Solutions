/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const binarySearch = (nums, target, start, end) => {
    const len = nums.length;
    const mid = Math.floor((start + end) / 2);
    console.log(mid, start, end);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target && mid !== start) {
      return binarySearch(nums, target, start, mid - 1);
    } else if (nums[mid] < target && mid !== end) {
      return binarySearch(nums, target, mid + 1, end);
    }
    return -1;
  };

  return binarySearch(nums, target, 0, nums.length - 1);
};
