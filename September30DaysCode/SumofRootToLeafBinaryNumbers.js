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
var sumRootToLeaf = function (root) {
  return traverse(root, '');
};

var traverse = function (node, binaryStr) {
  if (!node) {
    return 0;
  }
  var sum = 0;
  var lSum = 0;
  var rSum = 0;
  binaryStr = binaryStr + node.val.toString();

  if (!node.left && !node.right) {
    sum = parseInt(binaryStr, 2);
  } else {
    lSum = traverse(node.left, binaryStr);
    rSum = traverse(node.right, binaryStr);
  }
  sum = rSum + lSum + sum;
  binaryStr = binaryStr.substring(0, binaryStr.length - 2);
  return sum;
};
