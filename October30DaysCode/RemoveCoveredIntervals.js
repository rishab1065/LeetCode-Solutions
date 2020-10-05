/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function (intervals) {
  intervals = intervals.sort((interval1, interval2) => {
    if (interval1[0] !== interval2[0]) return interval1[0] - interval2[0];
    if (interval1[0] === interval2[0]) return interval2[1] - interval1[1];
    return 0;
  });
  var i = 0;
  var j = 1;
  while (i < intervals.length) {
    j = i + 1;
    while (j < intervals.length) {
      if (intervals[i][1] >= intervals[j][1]) {
        intervals.splice(j, 1);
      } else {
        j++;
      }
    }
    i++;
  }
  console.log(intervals, 'intervals');
  return intervals.length;
};

removeCoveredIntervals([[1, 2]]);
