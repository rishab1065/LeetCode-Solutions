/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var findRightInterval = function (intervals) {
  var sortedIntervals = intervals.sort((a, b) => {
    return a[0] <= b[1] ? -1 : 1;
  });
  console.log(sortedIntervals);
  var result = [];
  for (var i = 0; i < sortedIntervals.length; i++) {
    const first = sortedIntervals[i];
    for (var j = i + 1; j < sortedIntervals.length; j++) {
      if (first[0] <= sortedIntervals[j][1]) {
        result[i] = intervals.findIndex((interval) => {
          return (
            interval[0] === sortedIntervals[j][0] &&
            interval[1] === sortedIntervals[j][1]
          );
        });
        console.log(result[i]);
        break;
      }
    }
  }
  console.log(result);
};

findRightInterval([
  [3, 4],
  [2, 3],
  [1, 2],
]);
