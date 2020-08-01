/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  var memo = {};
  return memoClimbStairs(n, memo);
};

var memoClimbStairs = function (n, memo) {
  if (n === 2 || n == 1) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  const ways = memoClimbStairs(n - 2, memo) + memoClimbStairs(n - 1, memo);
  memo[n] = ways;
  return ways;
};
console.time('object');
const aaa = climbStairs(45);
console.timeEnd('object');
console.log(aaa);
