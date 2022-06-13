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

// Type: Linked List, Sentinel Node

// Intuitively, we can pick the previous node of the node to delete
// link prevNode to the next node of the delete's node

// we should handle the cases that consecutive nodes to delete, or the first node to delete situations
// As you can see in my previous commit, the nested if else makes code more complicated to read
// * we can use sentinel node to make linked list no headless and hence simplify deletion

// Time: O(N)
// Space: O(1)
var removeElements = function(head, val) {
  let sentinel = new ListNode(0);
  sentinel.next = head;
  
  let prevNode = sentinel;
  let currentNode = head;
  
  while(currentNode) {
      if (currentNode.val === val) {
          prevNode.next = currentNode.next;                
      } else {
          prevNode = currentNode;   
      }

      currentNode = currentNode.next;
  }
  
  return sentinel.next;
};