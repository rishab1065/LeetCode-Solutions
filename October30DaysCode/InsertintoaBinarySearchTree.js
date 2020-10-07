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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  var node = root;
  var prev = null;
  while (node) {
    prev = node;
    if (node.val >= val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  console.log(prev);
  if (!prev) {
    return { val, left: null, right: null };
  }
  if (prev.val > val) {
    prev.left = { val, left: null, right: null };
  } else {
    prev.right = { val, left: null, right: null };
  }
  return root;
};
