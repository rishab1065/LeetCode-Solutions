/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var map = {};
var findPairs = function (nums, k) {
  map = {};
  let count = 0;
  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
      if (
        nums[j] - nums[i] === k &&
        i !== j &&
        !map[JSON.stringify([nums[i], nums[j]])]
      ) {
        // console.log(nums[i],nums[j])
        map[JSON.stringify([nums[i], nums[j]])] = true;
        count++;
      }
    }
  }
  return count;
};
