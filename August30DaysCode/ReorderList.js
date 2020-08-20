/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (!head || !head.next) return head;

  var len = 0;
  var itr = head;
  var nodes = [];
  while (itr) {
    itr = itr.next;
    len++;
  }
  const mid = Math.ceil(len / 2);
  itr = head;
  var ctr = 1;
  var midPtr = null;
  while (itr) {
    var temp = itr;
    if (ctr > mid) {
      itr = itr.next;
      temp.next = null;
      nodes.unshift(temp);
    } else {
      midPtr = itr;
      itr = itr.next;
    }

    ctr++;
  }
  midPtr.next = null;
  itr = head;

  while (nodes.length > 0) {
    var temp = itr.next;
    itr.next = nodes.shift();
    itr.next.next = temp;
    itr = itr.next.next;
  }
};

var reorderList = function (head) {
  if (!head || !head.next || !head.next.next) return head;
  var slow = head;
  var fast = head;
  var nodes = [];
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  var midNextNode = slow.next;
  slow.next = null;
  while (midNextNode) {
    const temp = midNextNode;
    midNextNode = midNextNode.next;
    temp.next = null;
    nodes.unshift(temp);
  }
  var ptr = head;
  while (nodes.length > 0) {
    var temp = ptr.next;
    ptr.next = nodes.shift();
    ptr.next.next = temp;
    ptr = ptr.next.next;
  }
};
