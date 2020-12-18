/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  var first = Number.MAX_SAFE_INTEGER;
  var second = Number.MAX_SAFE_INTEGER;

  var result = false;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] <= first) {
      first = nums[i];
    } else if (nums[i] <= second) {
      second = nums[i];
    } else {
      result = true;
    }
  }

  return result;
};
