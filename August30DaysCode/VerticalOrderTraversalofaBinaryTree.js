/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
  const orderMap = {};
  traverseTree(root, 0, 0, orderMap);
  return Object.keys(orderMap)
    .sort((a, b) => a - b)
    .map((num) => {
      var newArr = [];
      orderMap[num].forEach((ele) => {
        if (ele && ele.length > 0) {
          newArr = newArr.concat(ele.sort((a, b) => a - b));
        }
      });
      return newArr;
    });
};

var traverseTree = (node, position, level, orderMap) => {
  if (!node) {
    return;
  }
  if (!orderMap[position]) orderMap[position] = [];
  if (!orderMap[position][level]) orderMap[position][level] = [];

  orderMap[position][level].push(node.val);

  traverseTree(node.left, position - 1, level + 1, orderMap);
  traverseTree(node.right, position + 1, level + 1, orderMap);
};
