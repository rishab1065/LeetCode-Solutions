/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {
  var j = 0;
  var numsI = Number.MAX_SAFE_INTEGER;
  while (j < nums.length) {
    var k = j + 1;
    numsI = Math.min(numsI, nums[j]);
    while (k < nums.length) {
      if (nums[k] < nums[j] && nums[k] > numsI) {
        return true;
      }
      k++;
    }
    j++;
  }
  return false;
};
