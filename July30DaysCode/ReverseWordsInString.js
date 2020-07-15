/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  var reverseWords = '';
  var words = s.split(' ');
  for (var i = 0; i < words.length; i++) {
    if (words[words.length - i - 1] === '') continue;
    reverseWords += words[words.length - i - 1] + ' ';
  }
  return reverseWords.trim();
};

console.log(reverseWords('a good   example'));
