/**
 * // Definition for a Node.
 function Node(val,prev,next,child) {
    this.val = val;
     this.prev = prev;
     this.next = next;
     this.child = child;
    return this;
  };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/**
 * // Definition for a Node.
 function Node(val,prev,next,child) {
    this.val = val;
     this.prev = prev;
     this.next = next;
     this.child = child;
    return this;
  };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/////////////////////////////// SOLUTION WITHOUT LOGS ///////////////////////////////
var flatten = function (head) {
  if (!head || !head.val) {
    return head;
  }
  let newHead = traverseLinkList(head);
  return newHead;
};

var traverseLinkList = function (node) {
  if (!node) {
    return null;
  }
  var newListNode = getNode(node.val, node.prev, null, null);
  if (node.child) {
    newListNode.next = traverseLinkList(node.child);
    newListNode.next.prev = newListNode;
    var dupNewNode = newListNode;
    while (dupNewNode.next !== null) {
      dupNewNode = dupNewNode.next;
    }
    dupNewNode.next = traverseLinkList(node.next);
    if (dupNewNode.next) {
      dupNewNode.next.prev = dupNewNode;
    }
  } else if (node.next) {
    newListNode.next = traverseLinkList(node.next);
    newListNode.next.prev = newListNode;
  }
  return newListNode;
};

function getNode(val, prev, next, child) {
  const newNode = {};
  newNode.val = val;
  newNode.prev = prev;
  newNode.next = next;
  newNode.child = child;
  return newNode;
}

/////////////////////////////// SOLUTION ///////////////////////////////

var flatten = function (head) {
  if (!head || !head.val) {
    return head;
  }
  let newHead = traverseLinkList(head);
  // console.log(newHead.val);
  // console.log(newHead.next.val);
  // console.log(newHead.next.next.val);
  // console.log(newHead.next.next.next.val);
  // console.log(newHead.next.next.next.next.val);
  // let dupNewHead =newHead
  // dupNewHead = dupNewHead.next.next.next.next.next.next.next.next.next;
  // while(dupNewHead.next!==null){
  // console.log("next val==>",dupNewHead.val);
  // console.log("prev==>",dupNewHead.prev);
  // console.log("next==>",dupNewHead.next);
  //  console.log("<=======================>");
  // dupNewHead = dupNewHead.next
  // }
  // while(dupNewHead.prev!==null){
  // console.log("prev val==>",dupNewHead.val);
  // console.log("prev==>",dupNewHead.prev);
  // console.log("next==>",dupNewHead.next);
  //  console.log("<=======================>");
  // dupNewHead = dupNewHead.prev
  // }
  // console.log("val==>",dupNewHead.val);
  //     console.log("prev==>",dupNewHead.prev);
  //     console.log("next==>",dupNewHead.next);
  // console.log(dupNewHead.val);
  return newHead;
};

var count = 0;
var traverseLinkList = function (node) {
  if (!node) {
    return null;
  }
  if (count < 360) {
    count++;
  } else {
    console.log(node.val);
  }
  var newListNode = getNode(node.val, node.prev, null, null);
  if (node.child) {
    newListNode.next = traverseLinkList(node.child);
    newListNode.next.prev = newListNode;
    var dupNewNode = newListNode;
    while (dupNewNode.next !== null) {
      // console.log(dupNewNode.val,newListNode.val);
      // dupNewNode.next.prev = dupNewNode;
      dupNewNode = dupNewNode.next;
    }
    // console.log(dupNewNode.next);
    dupNewNode.next = traverseLinkList(node.next);
    if (dupNewNode.next) dupNewNode.next.prev = dupNewNode;
    // return dupNewNode;
    // newListNode.next.next = traverseLinkList(node.next)
    // return newListNode.next;
  } else if (node.next) {
    newListNode.next = traverseLinkList(node.next);
    newListNode.next.prev = newListNode;
  }

  // console.log(newListNode.val,"hello");
  return newListNode;
};
function getNode(val, prev, next, child) {
  const newNode = {};
  newNode.val = val;
  newNode.prev = prev;
  newNode.next = next;
  newNode.child = child;
  return newNode;
}
