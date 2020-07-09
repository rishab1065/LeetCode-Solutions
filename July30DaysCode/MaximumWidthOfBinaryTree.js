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
var maxWidth = 0;
var widthOfBinaryTree = function (root) {
  const result = [];
  maxWidth = 0;
  traverseTree(root, 0, result, 1);
  return maxWidth;
};

function traverseTree(root, level, result, position) {
  if (!root) {
    return;
  }
  if (!result[level]) {
    result[level] = [];
  }
  result[level].push(position);
  const levelArr = result[level];
  const width = levelArr[levelArr.length - 1] - levelArr[0] + 1; // calculating the distance between left and right node for a lavel
  if (maxWidth < width) {
    maxWidth = width;
  }
  traverseTree(root.left, level + 1, result, 2 * position);
  traverseTree(root.right, level + 1, result, 2 * position + 1);
}
///
