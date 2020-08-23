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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  return traverseTree(root, []);
};

var traverseTree = function (node, inorder) {
  if (!node) {
    return [];
  }

  traverseTree(node.left, inorder);
  inorder.push(node.val);
  traverseTree(node.right, inorder);
  return inorder;
};
