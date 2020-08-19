/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || head.next === null) return false;
  var ptr1 = head;
  var ptr2 = head.next;

  while (ptr1 !== ptr2) {
    if (ptr2 === null || ptr2.next === null) {
      return false;
    }
    ptr1 = ptr1.next;
    ptr2 = ptr2.next.next;
  }
  return true;
};
