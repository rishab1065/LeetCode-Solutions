/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head) {
    return null;
  }
  return reverse(head, null);
};

var reverse = function (node, prev) {
  var nextNode = node.next;
  node.next = prev;
  if (nextNode) {
    return reverse(nextNode, node);
  }
  return node;
};
