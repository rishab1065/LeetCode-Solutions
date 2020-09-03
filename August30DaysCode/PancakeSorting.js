/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function (A) {
  var i = 0;
  var newArr = [];
  while (i < A.length) {
    var maxIndex = 9999;
    var max = -1;
    for (var j = 0; j < A.length - i; j++) {
      if (max < A[j]) {
        max = A[j];
        maxIndex = j;
      }
    }
    newArr[i] = maxIndex + 1;
    if (max - 1 === maxIndex) {
      i++;
      console.log(A, 'Fsfdsfd', i, max, maxIndex);
    } else {
      var firstArr = A.slice(0, maxIndex + 1);
      var secondArr = A.slice(maxIndex + 1, A.length - i) || [];
      var thiridArr = A.slice(A.length - i) || [];
      A = firstArr.reverse().concat(secondArr).reverse().concat(thiridArr);
      i++;
    }
  }
  return newArr;
};

console.log(pancakeSort([3, 4, 2, 1]));
