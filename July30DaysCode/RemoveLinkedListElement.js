/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  var ptr1 = head;
  var prevPtr = null;
  while (ptr1 !== null) {
    if (prevPtr === null && ptr1.val === val) {
      head = head.next;
      prevPtr = null;
    } else if (ptr1.val === val && ptr1.next !== null) {
      prevPtr.next = ptr1.next;
    } else if (ptr1.val === val && ptr1.next === null) {
      prevPtr.next = null;
      prevPtr = ptr1;
    } else {
      prevPtr = ptr1;
    }
    ptr1 = ptr1.next;
  }
  return head;
};
