/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length < 3) return false;

  var l = 0;
  var r = arr.length - 1;

  while (arr[l] < arr[l + 1]) {
    l++;
  }
  while (arr[r] < arr[r - 1]) {
    r--;
  }
  if (r === arr.length - 1 || l === 0) {
    return false;
  }
  if (l === r) {
    return true;
  }
  return false;
};
