/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
var rand10 = function () {
  var num = 7 * rand7() + rand7();
  while (num > 50 || num < 11) {
    num = 7 * rand7() + rand7();
  }

  return num % 10 === 0 ? 10 : num % 10;
};
