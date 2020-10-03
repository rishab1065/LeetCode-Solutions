/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var map = {};
var combinationSum = function (candidates, target) {
  map = {};
  return findCombinations(candidates, target, [], []);
};

var findCombinations = function (candidates, target, currRes, result) {
  if (target < 0) {
    return result;
  }
  if (target === 0) {
    if (!map[JSON.stringify(currRes.sort())]) {
      map[JSON.stringify(currRes.sort())] = true;

      result.push([...currRes]);
    }
    return result;
  }

  for (let i = 0; i < candidates.length; i++) {
    let candidate = candidates[i];
    if (target - candidate >= 0) {
      findCombinations(
        candidates,
        target - candidate,
        [...currRes, candidate],
        result
      );
    }
  }
  return result;
};
