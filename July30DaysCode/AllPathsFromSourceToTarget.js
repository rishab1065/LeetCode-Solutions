/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  let path = [];
  let allPaths = [];

  dfs(0, graph, path, allPaths);
  return allPaths;
};

var dfs = function (currentNode, graph, path, allPaths) {
  path.push(currentNode);
  if (currentNode === graph.length - 1) {
    allPaths.push([...path]);
  }
  graph[currentNode].forEach((nextNode) => {
    dfs(nextNode, graph, path, allPaths);
  });
  path.pop();
};

const ans = allPathsSourceTarget([[1, 2], [3], [3], []]);
console.log(ans);
