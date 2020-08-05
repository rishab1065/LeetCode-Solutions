/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.words = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  if (!this.words[word.length]) {
    this.words[word.length] = [];
  }
  this.words[word.length].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  if (!this.words[word.length]) {
    return false;
  }
  const allWords = this.words[word.length];
  for (var i = 0; i < allWords.length; i++) {
    const dictWord = allWords[i];
    let match = true;
    const newWordLen = word.length;
    if (newWordLen === dictWord.length) {
      for (var j = 0; j < newWordLen; j++) {
        if (dictWord[j] === word[j] || word[j] === '.') {
          match = match && true;
        } else {
          match = match && false;
        }
      }
      if (match) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
var obj = new WordDictionary();
obj.addWord('a');
obj.addWord('ab');

console.log(obj.search('a'));
console.log(obj.search('a.'));
console.log(obj.search('ab'));
console.log(obj.search('.a'));
console.log(obj.search('.b'));
console.log(obj.search('ab.'));
console.log(obj.search('.'));
console.log(obj.search('..'));

// obj.addWord('bad');
// obj.addWord('dad');

// console.log(obj.search('mad'));
// console.log(obj.search('pad'));
// console.log(obj.search('bad'));
// console.log(obj.search('.ad'));
// console.log(obj.search('b..'));
// console.log(obj.search('ab.'));
// console.log(obj.search('.'));
// console.log(obj.search('..'));

// obj.addWord('at');
// obj.addWord('and');
// obj.addWord('an');
// obj.addWord('add');

// console.log(obj.search('a'));
// console.log(obj.search('.at'));
// obj.addWord('bat');
// console.log(obj.search('.at'));
// console.log(obj.search('an.'));
// console.log(obj.search('a.d.'));
// console.log(obj.search('b.'));
// console.log(obj.search('a.d'));
// console.log(obj.search('.'));
