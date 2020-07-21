/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  var visited = new Array(board.length);

  for (var aa = 0; aa < board.length; aa++) {
    visited[aa] = new Array(board[aa].length).fill(0);
  }
  let result = false;
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        result = dfs(i, j, word.substr(1), board, visited);
        if (result) break;
      }
    }
    if (result) break;
  }
  return result;
};

var dfs = (i, j, word, board, visited) => {
  visited[i][j] = 1;
  if (word === '') return true;
  var result = false;
  if (visited[i][j - 1] === 0 && board[i][j - 1] === word[0]) {
    result = result || dfs(i, j - 1, word.substr(1), board, visited);
  }
  if (visited[i][j + 1] === 0 && board[i][j + 1] === word[0]) {
    result = result || dfs(i, j + 1, word.substr(1), board, visited);
  }
  if (i - 1 >= 0 && visited[i - 1][j] === 0 && board[i - 1][j] === word[0]) {
    result = result || dfs(i - 1, j, word.substr(1), board, visited);
  }
  if (
    i + 1 < board.length &&
    visited[i + 1][j] === 0 &&
    board[i + 1][j] === word[0]
  ) {
    result = result || dfs(i + 1, j, word.substr(1), board, visited);
  }
  visited[i][j] = 0;
  return result;
};

const ans = exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCD'
);
console.log(ans);
