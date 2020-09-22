/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  var numCount = {};
  nums.forEach((num) => {
    if (!numCount[num]) numCount[num] = 0;
    numCount[num]++;
  });
  return Object.keys(numCount).filter((num) => {
    return numCount[num] > nums.length / 3;
  });
};
