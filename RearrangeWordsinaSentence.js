/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function (text) {
  const word = text
    .toLowerCase()
    .split(' ')
    .sort((a, b) => a.length - b.length)
    .join(' ');
  return word[0].toUpperCase() + word.substr(1);
};
