/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  return traverseTree(p, q);
};

var traverseTree = function (tree1Node, tree2Node) {
  if (!tree1Node && !tree2Node) {
    return true;
  }

  if (!tree1Node || !tree2Node) {
    return false;
  }

  return (
    traverseTree(tree1Node.left, tree2Node.left) &&
    traverseTree(tree1Node.right, tree2Node.right) &&
    tree1Node.val === tree2Node.val
  );
};
