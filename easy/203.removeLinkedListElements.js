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

var removeElements = function(head, val) {
  let prevNode = null;
  let currentNode = head;
  
  while(currentNode) {      
      if(currentNode.val === val) {
          // remove the first item
          if(!prevNode) {
              head = currentNode.next;                                
          } else {
              prevNode.next = currentNode.next;                
          }
      } else {
          prevNode = currentNode;   
      }

      currentNode = currentNode.next;
  }
  
  return head;
};