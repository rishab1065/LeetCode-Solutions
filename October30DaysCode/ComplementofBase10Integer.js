/**
 * @param {number} N
 * @return {number}
 */
var bitwiseComplement = function (N) {
  const num = N.toString(2);
  let res = '';
  for (let i = 0; i < num.length; i++) {
    res += num[i] === '1' ? '0' : '1';
  }
  return parseInt(res, 2);
};
