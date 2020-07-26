/**
 * @param {number[]} nums
 * @return {number}
 */

// linear search
// var findMin = function (nums) {
//   var min = nums[0];

//   nums.forEach((num) => {
//     if (num < min) {
//       min = num;
//     }
//   });
//   console.log(min);
// };

// binary search
var findMin = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  var start = 0;
  var end = nums.length - 1;
  // sorted array
  if (nums[start] < nums[end]) {
    return nums[start];
  }

  while (start < end) {
    var mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[end]) {
      start = mid + 1;
    } else if (nums[mid] < nums[end]) {
      end = mid;
    } else {
      end--;
    }
  }
  return nums[start];
};

const ans = findMin([3, 1]);
console.log(ans);
