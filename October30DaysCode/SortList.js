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
var sortList = function (head) {
  var arr = [];
  var node = head;
  while (node) {
    arr.push(node.val);
    node = node.next;
  }

  arr = arr.sort((a, b) => a - b);
  // console.log(arr)
  node = head;
  var i = 0;
  while (node) {
    node.val = arr[i];
    i++;
    node = node.next;
  }
  return head;
};
