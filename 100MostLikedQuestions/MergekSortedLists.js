/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];
  var mergeList = lists[0];
  for (var i = 1; i < lists.length; i++) {
    mergeList = mergeTwoLists(mergeList, lists[i]);
  }
  return mergeList;
};

var mergeTwoLists = function (list1, list2) {
  var newList = {};
  var head = newList;
  while (list1.next !== null || list2.next !== null) {
    if (list1.val <= list2.val) {
      newList.next = list1;
      list1 = list1.next;
    } else {
      newList.next = list2;
      list2 = list2.next;
    }
    newList = newList.next;
  }
  if (list1.next !== null) {
    newList.next = list1;
  }
  if (list2.next !== null) {
    newList.next = list2;
  }
  return head.next;
};
const ans = mergeKLists([
  [1, 4, 5],
  [1, 3, 4],
  [2, 6],
]);

console.log(ans);
