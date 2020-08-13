var CombinationIterator = function (characters, combinationLength) {
  const getSubsets = function (subsets, str) {
    if (str === '') {
      return subsets;
    }
    const len = subsets.length;
    for (var i = 0; i < len; i++) {
      let subset = subsets[i];
      subset = subset + str[0];
      subsets.push(subset);
    }
    return getSubsets(subsets, str.substr(1));
  };
  this.allSubsets = getSubsets([''], characters)
    .filter((subset) => subset.length === combinationLength)
    .sort();
};
CombinationIterator.prototype.next = function () {
  return this.allSubsets.shift();
};

CombinationIterator.prototype.hasNext = function () {
  return this.allSubsets.length > 0;
};

const newCombiItr = new CombinationIterator('bvwz', 2);

console.log(newCombiItr.hasNext());
console.log(newCombiItr.hasNext());
console.log(newCombiItr.next());
console.log(newCombiItr.next());
console.log(newCombiItr.hasNext());
console.log(newCombiItr.hasNext());
console.log(newCombiItr.next());
console.log(newCombiItr.hasNext());
console.log(newCombiItr.hasNext());
console.log(newCombiItr.hasNext());
