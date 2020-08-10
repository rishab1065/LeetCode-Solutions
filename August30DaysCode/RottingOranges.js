/**
 * @param {number[]} grid
 * @return {number}
 */

// dp[0][0] = grid[0][0] === 2 value 0
// dp[0][0] = grid[0][0] === 0 value max int
// dp[0][0] = grid[0][0] === 1 value 1 + Math.min(dp[-1][0],dp[1][0],dp[0][-1],dp[0][1])
var orangesRotting = function (grid) {
  const rottenOranges = [];
  let currentMin = 0;
  let totalFreshOranges = 0;
  for (var x = 0; x < grid.length; x++) {
    for (var y = 0; y < grid[x].length; y++) {
      if (grid[x][y] === 2) {
        rottenOranges.push({ i: x, j: y, min: 0 });
      } else if (grid[x][y] === 1) {
        totalFreshOranges++;
      }
    }
  }
  while (rottenOranges.length > 0) {
    const rottenOrange = rottenOranges.shift();
    const { i, j, min } = rottenOrange;
    if (currentMin < min) {
      currentMin = min;
    }
    if (i - 1 >= 0 && grid[i - 1][j] === 1) {
      rottenOranges.push({ i: i - 1, j, min: min + 1 });
      grid[i - 1][j] = 2;
      totalFreshOranges--;
    }
    if (i + 1 < grid.length && grid[i + 1][j] === 1) {
      rottenOranges.push({ i: i + 1, j, min: min + 1 });
      grid[i + 1][j] = 2;
      totalFreshOranges--;
    }
    if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
      rottenOranges.push({ i, j: j + 1, min: min + 1 });
      grid[i][j + 1] = 2;
      totalFreshOranges--;
    }
    if (j - 1 >= 0 && grid[i][j - 1] === 1) {
      rottenOranges.push({ i, j: j - 1, min: min + 1 });
      grid[i][j - 1] = 2;
      totalFreshOranges--;
    }
  }
  return totalFreshOranges === 0 ? currentMin : -1;
};

const ans = orangesRotting([[1, 0]]);
console.log(ans);
