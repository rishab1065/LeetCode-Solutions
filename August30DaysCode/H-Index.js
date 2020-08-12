/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations = citations.sort((a, b) => b - a);
  var finalHIndex = 0;
  for (var i = 0; i < citations.length; i++) {
    if (citations[i] < i) {
      return finalHIndex;
    }
    finalHIndex = i + 1;
  }
  return finalHIndex;
};

const ans = hIndex([3, 0, 6, 1, 5]);
console.log(ans);
