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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  if (!root) {
    return 0;
  }
  return (
    traverseTree(root, 0, sum) +
    pathSum(root.left, sum) +
    pathSum(root.right, sum)
  );
};

var traverseTree = function (node, currSum, sum) {
  if (!node) {
    return 0;
  }
  var ans = 0;
  currSum += node.val;
  if (currSum === sum) {
    ans = ans + 1;
  }
  if (node.left) {
    ans += traverseTree(node.left, currSum, sum);
  }
  if (node.right) {
    ans += traverseTree(node.right, currSum, sum);
  }
  return ans;
};
