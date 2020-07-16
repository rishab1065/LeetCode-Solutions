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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  traverseTree(root);
  return root;
};

var traverseTree = function (node) {
  if (!node) {
    return;
  }

  traverseTree(node.left);
  traverseTree(node.right);

  if (node.left) {
    var temp = node.right;
    node.right = node.left;
    node.left = null;
    var rightMostNode = node.right;
    while (rightMostNode.right !== null) {
      rightMostNode = rightMostNode.right;
    }

    rightMostNode.right = temp;
  }
};
