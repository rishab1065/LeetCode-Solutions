/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = true;
    } else {
      return nums[i];
    }
  }
};
