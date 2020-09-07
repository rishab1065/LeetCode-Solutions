/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
  var map = {};
  var len = pattern.length;
  const words = str.split(' ');
  if (len !== words.length) return false;
  for (var i = 0; i < len; i++) {
    if (map[pattern[i]] && map[pattern[i]] !== words[i]) {
      return false;
    } else if (!map[pattern[i]]) {
      if (Object.values(map).indexOf(words[i]) === -1) {
        map[pattern[i]] = words[i];
      } else {
        map[pattern[i]] = 'duplicate';
        return false;
      }
    }
  }
  return true;
};
