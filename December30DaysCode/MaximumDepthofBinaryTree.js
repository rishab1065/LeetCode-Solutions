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
 * @return {number}
 */
var maxDepth = function (root) {
  return getHeight(root, 0);
};

var getHeight = function (node, level) {
  if (!node) {
    return level;
  }
  let leftHeight = 0;
  if (node.left) {
    leftHeight = getHeight(node.left, level);
  }
  let rightHeight = 0;
  if (node.right) {
    rightHeight = getHeight(node.right, level);
  }

  return Math.max(rightHeight, leftHeight) + 1;
};
