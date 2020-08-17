/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  const result = new Array(num_people).fill(0);
  var n = 0;
  while (candies > 0) {
    for (var i = 0; i < result.length; i++) {
      if (candies > i + 1 + n * num_people) {
        result[i] += i + 1 + n * num_people;
        candies -= i + 1 + n * num_people;
      } else {
        result[i] += candies;
        candies = 0;
      }

      if (i === result.length - 1) {
        n++;
      }
    }
  }
  return result;
};
