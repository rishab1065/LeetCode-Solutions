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
  return maxHeight(root, 1);
};

var maxHeight = function (node, level) {
  if (!node) {
    return level - 1;
  }

  const lHeight = maxHeight(node.left, level + 1);
  const rHeight = maxHeight(node.right, level + 1);

  return Math.max(lHeight, rHeight);
};
