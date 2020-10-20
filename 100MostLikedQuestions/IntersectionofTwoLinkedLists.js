/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let len1 = 0;
  let len2 = 0;

  var node = headA;

  while (node) {
    node = node.next;
    len1++;
  }
  node = headB;
  while (node) {
    node = node.next;
    len2++;
  }
  if (len2 > len1) {
    while (len2 !== len1) {
      headB = headB.next;
      len2--;
    }
  } else if (len2 < len1) {
    while (len2 !== len1) {
      headA = headA.next;
      len1--;
    }
  }

  while (headA !== headB && headA && headB) {
    headA = headA.next;
    headB = headB.next;
  }

  return headA;
};
