/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  var minWindowLen = Number.MAX_SAFE_INTEGER;
  var charIncludedCount = 0;
  var charMap = {};
  var maxAllowedCharMap = {};
  var i = 0;
  while (i < t.length) {
    if (!maxAllowedCharMap[t[i]]) {
      maxAllowedCharMap[t[i]] = 0;
    }
    maxAllowedCharMap[t[i]]++;
    i++;
  }
  // console.log(maxAllowedCharMap);
  if (s.length < t.length || s === '' || t === '') {
    return '';
  }
  var window = '';
  var lastWindow = window;
  var l = 0;
  var r = 0;
  while (l <= r) {
    var char = s[r];
    if (charIncludedCount < t.length) {
      r++;
      if (r > s.length) {
        break;
      }
      window += char;
      if (t.includes(char)) {
        if (!charMap[char]) {
          charMap[char] = 0;
        }
        if (charMap[char] < maxAllowedCharMap[char]) {
          charIncludedCount++;
        }
        charMap[char] += 1;
      }
    } else if (charIncludedCount === t.length) {
      if (minWindowLen > window.length && window.length >= t.length) {
        lastWindow = window;
        minWindowLen = window.length;
      }

      var char2 = s[l];
      window = window.substr(1);
      l++;
      if (t.includes(char2)) {
        charMap[char2] -= 1;
        if (charMap[char2] < maxAllowedCharMap[char2]) {
          charIncludedCount--;
        }
      }
    }
  }
  // console.log(lastWindow);

  return lastWindow;
};

minWindow('AA', 'AA');
