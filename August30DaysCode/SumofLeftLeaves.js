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
var sumOfLeftLeaves = function (root) {
  return traverseTree(root);
};

var traverseTree = function (node) {
  if (!node) {
    return 0;
  }

  const lsum = traverseTree(node.left);
  const rsum = traverseTree(node.right);
  let currSum = 0;
  if (node.left && !node.left.right && !node.left.left) {
    currSum += node.left.val;
  }
  return lsum + rsum + currSum;
};
