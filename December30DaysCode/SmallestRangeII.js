/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeII = function (A, K) {
  A = A.sort((a, b) => a - b);

  let ans = A[A.length - 1] - A[0];

  for (var i = 0; i < A.length - 1; i++) {
    const high = Math.max(A[A.length - 1] - K, A[i] + K);
    const low = Math.min(A[0] + K, A[i + 1] - K);
    ans = Math.min(ans, high - low);
  }
  return ans;
};
