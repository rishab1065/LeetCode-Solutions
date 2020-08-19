/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function (S) {
  const words = S.split(' ');
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  words.forEach((word, index) => {
    if (vowels.indexOf(word[0]) === -1) {
      word = word.substr(1) + word[0];
    }
    word += 'ma';
    word += new Array(index + 1).fill('a').join('');
    words[index] = word;
  });
  return words;
};

const ans = toGoatLatin('I speak Goat Latin');
console.log(ans);

var toGoatLatin = function (S) {
  const vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  return S.split(' ')
    .map((word, index) => {
      if (!vowels.includes(word[0])) {
        word = word.substr(1) + word[0];
      }
      return (word += 'ma' + 'a'.repeat(index + 1));
    })
    .join(' ');
};
