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
var minDepth = function (root) {
  if (!root) return 0;
  var traverse = (node, depth) => {
    if (!node.left && !node.right) {
      return depth;
    }

    const lDepth = node.left
      ? traverse(node.left, depth + 1)
      : Number.MAX_SAFE_INTEGER;
    const rDepth = node.right
      ? traverse(node.right, depth + 1)
      : Number.MAX_SAFE_INTEGER;

    return Math.min(lDepth, rDepth);
  };

  return traverse(root, 0) + 1;
};
