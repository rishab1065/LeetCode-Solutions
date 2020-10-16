/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  if (!matrix || !matrix[0]) return false;
  const rows = matrix.length;
  const cols = matrix[0].length;

  let targetRow = 0;
  while (targetRow < rows && target > matrix[targetRow][cols - 1]) {
    targetRow++;
  }
  return (matrix[targetRow] || []).includes(target);
};
const ans = searchMatrix([], 13);
console.log(ans);
