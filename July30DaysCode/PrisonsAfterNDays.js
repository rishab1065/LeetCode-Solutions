/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  var outputMap = {};
  while (N > 0) {
    var currentCell = 1;
    var newCells = [];
    outputMap[JSON.stringify(cells)] = N;

    newCells.push(0);

    while (currentCell < 7) {
      newCells.push(
        shouldOccupy(cells[currentCell - 1], cells[currentCell + 1])
      );
      currentCell++;
    }

    newCells.push(0);

    N--;

    if (outputMap[JSON.stringify(newCells)]) {
      N %= outputMap[JSON.stringify(newCells)] - N;
    }

    cells = newCells;
    newCells = [];
  }

  return cells;
};

var shouldOccupy = function (c1, c2) {
  return c1 === c2 ? 1 : 0;
};
