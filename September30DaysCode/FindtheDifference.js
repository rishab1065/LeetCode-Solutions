/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  var extraChar = '';
  t.split('').forEach((char) => {
    if (s.indexOf(char) === -1) {
      extraChar = char;
    } else {
      s = s.replace(char, '');
    }
  });
  return extraChar;
};
