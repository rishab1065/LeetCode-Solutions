/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var map = {};
var getRow = function (rowIndex) {
  return createPascalTriangle(rowIndex);
};

var createPascalTriangle = function (rowIndex) {
  if (rowIndex === 0) {
    return [1];
  }
  if (map[rowIndex]) {
    return map[rowIndex];
  }
  const prevRow = createPascalTriangle(rowIndex - 1);
  var currentRow = [];
  for (var i = 0; i < rowIndex + 1; i++) {
    if (i === 0 || i === rowIndex) {
      currentRow.push(1);
    } else {
      currentRow.push(prevRow[i] + prevRow[i - 1]);
    }
  }
  map[rowIndex] = currentRow;
  return currentRow;
};
console.time('object');
const row = getRow(3);
console.timeEnd('object');
console.log(row);
console.time('object11');
const row1 = getRow(3);
console.timeEnd('object11');
console.log(row1);

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  return createPascalTriangle([1], 1, rowIndex);
};

var createPascalTriangle = function (prevRow, level, rowIndex) {
  var currentRow = [];

  for (var i = 0; i < level; i++) {
    if (i === 0 || i === level - 1) {
      currentRow.push(1);
    } else {
      currentRow.push(prevRow[i] + prevRow[i - 1]);
    }
  }
  if (level === rowIndex + 1) {
    return currentRow;
  } else {
    return createPascalTriangle(currentRow, level + 1, rowIndex);
  }
};
