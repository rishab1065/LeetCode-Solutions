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
 * @return {TreeNode}
 */
var lastnode = null;
var increasingBST = function (root) {
  var firstNode = {};
  lastnode = firstNode;
  traverseTree(root);
  return firstNode.right;
};

var traverseTree = function (node) {
  if (!node) {
    return null;
  }

  if (node.left) {
    traverseTree(node.left);
  }
  node.left = null;
  lastnode.right = node;
  lastnode = lastnode.right;
  if (node.right) {
    node2 = traverseTree(node.right);
  }
};
