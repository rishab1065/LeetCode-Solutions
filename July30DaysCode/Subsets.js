/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  return getSubSets(nums, [[]], []);
};

var getSubSets = function (nums, subsetsArr, subArr) {
  nums.forEach((element, index) => {
    subsetsArr.push([...subArr, element]);
    getSubSets(nums.slice(index + 1), subsetsArr, [...subArr, element]);
  });
  return subsetsArr;
};

const output = subsets([1, 2]);
console.log(output, 'output');
