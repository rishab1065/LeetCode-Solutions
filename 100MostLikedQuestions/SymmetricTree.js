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
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }

  return checkTrees(root.left, root.right);
};

var checkTrees = function (leftTree, rightTree) {
  if (!leftTree && !rightTree) {
    return true;
  } else if (!leftTree || !rightTree) {
    return false;
  }

  if (leftTree.val !== rightTree.val) {
    return false;
  }

  return (
    checkTrees(leftTree.left, rightTree.right) &&
    checkTrees(leftTree.right, rightTree.left)
  );
};
