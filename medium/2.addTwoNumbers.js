/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// * LinkedList
// Time: O(Max(l1, l2))
// Space: O(1)
var addTwoNumbers = function(l1, l2) {
  let sumList = new ListNode(0);
  let l1Node = l1;
  let l2Node = l2;
  let sumNode = sumList;
  let carry = 0;

  while(l1Node || l2Node || carry !== 0) {
    const l1Val = l1Node ? l1Node.val : 0;
    const l2Val = l2Node ? l2Node.val : 0;
    let sum = l1Val + l2Val + carry;

    if(sum >= 10) {
      carry = 1
      sum -= 10;
    } else {
      carry = 0
    }

    sumNode.next = new ListNode(sum);
    l1Node = l1Node?.next;
    l2Node = l2Node?.next;
    sumNode = sumNode.next;
  }

  return sumList.next;
};