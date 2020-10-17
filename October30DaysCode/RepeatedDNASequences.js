/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  if (s.length <= 10) {
    return [];
  }

  var arr = new Set();
  var i = 0;
  var strings = {};
  while (i <= s.length - 10) {
    const target = s.substr(i, 10);
    if (strings[target]) {
      arr.add(target);
    } else {
      strings[target] = true;
    }
    i++;
  }
  //
  return [...arr];
};

findRepeatedDnaSequences('AAAAAAAAAAAAAAAAAA');
