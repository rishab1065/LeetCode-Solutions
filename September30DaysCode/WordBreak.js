/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  var memo = {};
  const recurr = (s, wordDict) => {
    if (s.length === 0 || wordDict.includes(s)) {
      return true;
    }

    let result = false;
    for (var i = s.length; i >= 0; i--) {
      const subStr = s.substring(i);
      if (typeof memo[subStr] === 'boolean') {
        result = result || memo[subStr];
      } else if (wordDict.includes(subStr)) {
        memo[subStr] = recurr(s.substr(0, i), wordDict);
        result = result || memo[subStr];
      }
    }
    return result;
  };
  return recurr(s, wordDict);
};
const ans = wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']);
console.log(ans);
