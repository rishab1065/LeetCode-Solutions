/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  var newArr = [asteroids[0]];
  var i = 1;
  while (i < asteroids.length) {
    if (
      newArr[newArr.length - 1] < 0 ||
      asteroids[i] > 0 ||
      newArr.length === 0
    ) {
      newArr.push(asteroids[i]);
      i++;
    } else {
      if (newArr[newArr.length - 1] < Math.abs(asteroids[i])) {
        newArr.pop();
      } else if (newArr[newArr.length - 1] > Math.abs(asteroids[i])) {
        i++;
      } else {
        newArr.pop();
        i++;
      }
    }
  }
  return newArr;
};
