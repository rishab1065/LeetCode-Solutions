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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  var result = [];
  var queue1 = [];
  var queue2 = [];
  var levelValues = [];
  if (root) {
    queue1.push(root);
  }
  while (queue1.length !== 0 || queue2.length !== 0) {
    while (queue1.length !== 0) {
      const element = queue1.shift();
      levelValues.push(element.val);
      if (element.left) {
        queue2.push(element.left);
      }
      if (element.right) {
        queue2.push(element.right);
      }

      if (queue1.length === 0) {
        result.unshift(levelValues);
        levelValues = [];
      }
    }

    while (queue2.length !== 0) {
      const element = queue2.shift();
      levelValues.push(element.val);
      if (element.left) {
        queue1.push(element.left);
      }
      if (element.right) {
        queue1.push(element.right);
      }
      if (queue2.length === 0) {
        result.unshift(levelValues);
        levelValues = [];
      }
    }
  }

  return result;
};

///////////////////////////SOLUTION 2///////////////////////////////////////

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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  var result = [];
  traverseTree(root, 0, result);
  return result.reverse();
};

function traverseTree(root, level, result) {
  if (!root) {
    return;
  }
  if (!result[level]) {
    result[level] = [];
  }
  result[level].push(root.val);
  traverseTree(root.left, level + 1, result);
  traverseTree(root.right, level + 1, result);
}
