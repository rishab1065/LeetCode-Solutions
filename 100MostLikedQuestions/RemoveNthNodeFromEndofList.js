/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (!head) return head;
  var ptr1 = head;
  var ptr2 = head;
  while (n--) {
    ptr1 = ptr1.next;
  }
  if (!ptr1) {
    return head.next;
  }
  while (ptr1.next) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  ptr2.next = ptr2.next.next;
  return head;
};
