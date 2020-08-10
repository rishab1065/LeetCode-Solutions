/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  return traverseTree(preorder, inorder);
};

var traverseTree = function (preorder, inorder) {
  if (!preorder.length) {
    return null;
  }
  const val = preorder[0];

  const node = { val };
  const indexOfVal = inorder.indexOf(val);
  node.left = traverseTree(
    preorder.slice(1, indexOfVal + 1),
    inorder.slice(0, indexOfVal)
  );
  node.right = traverseTree(
    preorder.slice(indexOfVal + 1),
    inorder.slice(indexOfVal + 1)
  );

  return node;
};

const tree = buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]);
console.log(JSON.stringify(tree, null, 2));
