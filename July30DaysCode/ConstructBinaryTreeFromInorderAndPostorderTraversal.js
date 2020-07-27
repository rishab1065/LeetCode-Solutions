/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const root = treeBuilder(inorder, postorder);
  return root;
};

var treeBuilder = function (inorder, postorder) {
  if (inorder.length === 0) {
    return null;
  }

  const nodeVal = postorder[postorder.length - 1];
  const treeNode = { val: nodeVal, left: null, right: null };
  const indexIn = inorder.indexOf(nodeVal);
  treeNode.left = treeBuilder(
    inorder.slice(0, indexIn),
    postorder.slice(0, indexIn)
  );
  treeNode.right = treeBuilder(
    inorder.slice(indexIn + 1),
    postorder.slice(indexIn, postorder.length - 1)
  );

  return treeNode;
};

buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]);
