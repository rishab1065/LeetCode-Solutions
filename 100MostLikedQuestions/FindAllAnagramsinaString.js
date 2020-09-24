/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  if (s.length < p.length || p.length === 0 || s.length === 0) {
    return [];
  }
  var startingIndex = 0;
  var freqMap = {};
  var currFreq = {};

  for (var i = 0; i < p.length; i++) {
    var char = p[i];
    if (!freqMap[char]) {
      freqMap[char] = 0;
    }
    freqMap[char]++;
  }

  var arr = [];
  var currIndex = 0;
  while (startingIndex < s.length) {
    if (
      p.indexOf(s[currIndex]) !== -1 &&
      (currFreq[s[currIndex]] || 0) < freqMap[s[currIndex]]
    ) {
      if (!currFreq[s[currIndex]]) {
        currFreq[s[currIndex]] = 0;
      }
      currFreq[s[currIndex]]++;
      currIndex++;
    } else {
      startingIndex++;
      currIndex = startingIndex;
      currFreq = {};
    }
    if (currIndex - startingIndex === p.length) {
      arr.push(startingIndex);
      startingIndex++;
      currIndex = startingIndex;
      currFreq = {};
    }
  }
  return arr;
};

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  var compare = (subStr, word) => {
    var isEqual = true;
    Object.keys(subStr).forEach((key) => {
      isEqual = subStr[key] === word[key] && isEqual;
    });
    return isEqual;
  };
  var freqMap = {};
  var wordFreqMap = {};

  for (var i = 0; i < p.length; i++) {
    if (!freqMap[p[i]]) freqMap[p[i]] = 0;
    if (!wordFreqMap[s[i]]) wordFreqMap[s[i]] = 0;

    freqMap[p[i]]++;
    wordFreqMap[s[i]]++;
  }

  var arr = [];
  for (var i = p.length; i < s.length + 1; i++) {
    if (compare(freqMap, wordFreqMap)) {
      arr.push(i - p.length);
    }
    wordFreqMap[s[i - p.length]]--;
    if (!wordFreqMap[s[i]]) wordFreqMap[s[i]] = 0;
    wordFreqMap[s[i]]++;
  }
  console.log(arr);
  return arr;
};
findAnagrams('aaaaaa', 'aa');
