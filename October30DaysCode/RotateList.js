/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  var node2 = head;
  var len = 0;
  while (node2) {
    len++;
    node2 = node2.next;
  }

  k = k % len;
  if (k === 0) return head;

  while (k--) {
    var lastNode = null; // second last node
    node2 = head;
    while (node2.next) {
      lastNode = node2;
      node2 = node2.next;
    }

    var lastNode2 = lastNode.next;
    // console.log(lastNode,lastNode2)
    lastNode2.next = head;
    lastNode.next = null;
    head = lastNode2;
  }
  return head;
};
