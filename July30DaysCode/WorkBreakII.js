/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

var wordBreak = function (s, wordDict) {
  var pool = {};
  const output = breakWords(s, wordDict, pool);
  return output;
};

var breakWords = function (s, wordDict, pool) {
  var wordsArr = [];

  if (s.length === 0) {
    return [''];
  }

  if (pool[s]) {
    console.log(pool[s]);
    return pool[s];
  }
  var i = s.length;
  while (i >= 0) {
    const subWord = s.substr(i, s.length);
    if (wordDict.indexOf(subWord) !== -1) {
      const tempWords = breakWords(s.substring(0, i), wordDict, pool);
      tempWords.forEach((tempWord) => {
        wordsArr.push(tempWord === '' ? subWord : tempWord + ' ' + subWord);
      });
    }
    i--;
  }
  pool[s] = wordsArr;
  return wordsArr;
};

const out = wordBreak(
  'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  [
    'a',
    'aa',
    'aaa',
    'aaaa',
    'aaaaa',
    'aaaaaa',
    'aaaaaaa',
    'aaaaaaaa',
    'aaaaaaaaaaaa',
  ]
);
console.log(out);
