/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length < 1) {
    return 0;
  }
  var map = {};
  strs.forEach((str) => {
    const sorted = str.split('').sort().join('');
    if (!map[sorted]) {
      map[sorted] = [];
    }
    map[sorted].push(str);
  });
  return Object.keys(map).map((key) => map[key]);
};

const ans = groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']);

console.log(ans);
