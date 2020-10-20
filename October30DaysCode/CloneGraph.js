/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function (node) {
  const cloneNode = (node, visited) => {
    if (!node) {
      return;
    }
    const newNode = { val: node.val, neighbors: [] };
    visited[node.val] = newNode;
    if (node.neighbors && node.neighbors.length > 0) {
      node.neighbors.forEach((neighbor) => {
        if (!visited[neighbor.val]) {
          const newNeighbor = cloneNode(neighbor, visited);
          newNode.neighbors.push(newNeighbor);
        } else {
          newNode.neighbors.push(visited[neighbor.val]);
        }
      });
    }

    return newNode;
  };
  return cloneNode(node, {});
};
