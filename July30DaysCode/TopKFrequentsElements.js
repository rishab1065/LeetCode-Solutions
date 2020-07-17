/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  var freq = {};
  nums.forEach((num) => {
    if (!freq[num]) {
      freq[num] = 0;
    }
    freq[num] += 1;
  });
  const array = Object.keys(freq)
    .sort((a, b) => freq[b] - freq[a])
    .map((x) => parseInt(x));
  return array.splice(0, k);
};

var aaaa = topKFrequent([1, 1, 1, 2, 2, 3], 2);
console.log(aaaa);
