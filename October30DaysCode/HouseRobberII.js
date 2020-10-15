/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 1) {
    return nums[0];
  }
  if (nums.length == 2) {
    return Math.max(nums[0], nums[1] || 0);
  }
  var money = [];
  money[0] = nums[0];
  money[1] = Math.max(nums[0], nums[1] || 0);

  var money2 = [];
  money2[0] = 0;
  money2[1] = Math.max(nums[1]);
  money2[2] = Math.max(nums[1], nums[2]);

  var i = 2;
  while (i < nums.length) {
    if (i < nums.length - 1)
      money[i] = Math.max(money[i - 1], money[i - 2] + nums[i]);
    if (i > 2) money2[i] = Math.max(money2[i - 1], money2[i - 2] + nums[i]);
    i++;
  }
  return Math.max(money[nums.length - 2], money2[nums.length - 1]);
};
