/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var findOrder = function (numCourses, prerequisites) {
  var courseMap = new Array(numCourses);
  var visitedCourse = {};
  var totalVisitedCourse = {};
  var cycleFound = false;
  var courseOrder = [];
  for (var i = 0; i < numCourses; i++) {
    courseMap[i] = new Array(numCourses).fill(0);
  }

  //   if (prerequisites.length === 0) {
  //     return [];
  //   }
  prerequisites.forEach((prerequisite) => {
    if (courseMap[prerequisite[1]][prerequisite[0]] !== 1) {
      courseMap[prerequisite[0]][prerequisite[1]] = 1;
    } else {
      cycleFound = true;
    }
  });
  if (!cycleFound) {
    var response = true;
    for (var i = 0; i < numCourses; i++) {
      // console.log(totalVisitedCourse[i], i);
      if (!totalVisitedCourse[i]) {
        response = dfs(
          courseMap,
          i,
          visitedCourse,
          totalVisitedCourse,
          courseOrder
        );
      }
      if (!response) break;
    }
    return response ? courseOrder : []; // cycle exist;
  }

  return []; //cycle exist;
};

var dfs = (
  courseMap,
  course,
  visitedCourse,
  totalVisitedCourse,
  courseOrder
) => {
  if (visitedCourse[course]) return false;

  if (totalVisitedCourse[course]) return true;

  var value = true;
  //   if (course === courseMap.length - 1) return value;

  visitedCourse[course] = true;
  for (var i = 0; i < courseMap.length; i++) {
    if (i === course || totalVisitedCourse[course]) continue;

    if (
      courseMap[i][course] === 0 &&
      courseMap[course][i] === 1
      //   ||
      //   (courseMap[i][course] === 0 && courseMap[course][i] === 1)
    ) {
      // console.log(i, course, 'hello');
      value =
        value &&
        dfs(courseMap, i, visitedCourse, totalVisitedCourse, courseOrder);
    }
  }
  visitedCourse[course] = false;
  totalVisitedCourse[course] = true;
  courseOrder.push(course);
  return value;
};

const aaa = findOrder(1, [
  //   [3, 1],
  //   [3, 2],
]);
console.log(aaa);
