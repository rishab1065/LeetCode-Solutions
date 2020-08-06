/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  var dups = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[-nums[i]] >= 0) {
      dups.push(nums[i]);
    } else {
      nums[-nums[i]] = nums[i];
    }
  }
  return dups;
};
const arr = findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
console.log(arr);
