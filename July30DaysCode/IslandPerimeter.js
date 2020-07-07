/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  let totalPerimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        totalPerimeter += calPerimeter(i, j, grid);
      }
    }
  }
  return totalPerimeter;
};

var calPerimeter = function (x, y, grid) {
  let peremeter = 4;
  if (grid[x] && grid[x][y + 1] === 1) {
    peremeter--;
  }
  if (grid[x] && grid[x][y - 1] === 1) {
    peremeter--;
  }
  if (grid[x + 1] && grid[x + 1][y] === 1) {
    peremeter--;
  }
  if (grid[x - 1] && grid[x - 1][y] === 1) {
    peremeter--;
  }
  return peremeter;
};
islandPerimeter([
  [0, 1, 0, 0],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  [1, 1, 0, 0],
]);
