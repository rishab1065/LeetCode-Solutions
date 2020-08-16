/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 1) {
    return 0;
  }
  var overLappingIntervals = 0;
  intervals = intervals.sort((a, b) => {
    if (a[1] === b[1]) return a[0] < b[0] ? -1 : 1;
    return a[1] < b[1] ? -1 : 1;
  });
  console.log(intervals);
  var last = intervals[0][1];
  for (var i = 1; i < intervals.length; i++) {
    if (last > intervals[i][0]) {
      overLappingIntervals++;
    } else {
      last = intervals[i][1];
    }
  }
  return overLappingIntervals;
};

const ans = eraseOverlapIntervals([
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
]);

console.log(ans);
