/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  if (s.length === 1) {
    return s.charCodeAt(0) - 65 + 1;
  }
  return (
    titleToNumber(s.substr(1), s.length - 1) +
    (s.charCodeAt(0) - 65 + 1) * Math.pow(26, s.length - 1)
  );
};

const ans = titleToNumber('AAA');
console.log(ans);
