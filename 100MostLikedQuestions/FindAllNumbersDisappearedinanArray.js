/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  nums.forEach((num, index) => {
    var temp = Math.abs(nums[index]);
    nums[temp - 1] = -Math.abs(nums[temp - 1]);
  });
  var list = [];
  nums.forEach((num, index) => {
    if (num > 0) {
      list.push(index + 1);
    }
  });
  return list;
};
