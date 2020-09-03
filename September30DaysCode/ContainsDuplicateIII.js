/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  var result = false;

  while (k > 0) {
    for (var i = 0; i < nums.length; i++) {
      if (i + k > nums.length - 1) {
        break;
      }
      if (Math.abs(nums[i] - nums[i + k]) <= t) {
        result = result || true;
        console.log(nums[i], nums[i + k]);
      }
    }
    k--;
  }
  return result;
};

const ans = containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3);
console.log(ans);
