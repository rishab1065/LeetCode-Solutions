/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
  var map = {};
  var part = [];
  for (var i = 0; i < S.length; i++) {
    map[S[i]] = S.lastIndexOf(S[i]);
  }
  var j = 0;
  var prevIndex = 0;
  var partIndex = -1;
  while (j < S.length) {
    if (partIndex < map[S[j]]) {
      partIndex = map[S[j]];
    }
    // console.log(prevIndex,partIndex,j)
    if (j === partIndex) {
      // console.log(S.substring(prevIndex,partIndex+1))
      part.push(S.substring(prevIndex, partIndex + 1).length);
      prevIndex = partIndex + 1;
      partIndex = -1;
    }
    j++;
  }
  // console.log(part)
  return part;
};
