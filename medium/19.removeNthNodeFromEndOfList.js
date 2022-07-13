/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// * Reversed linked lis
// Time: O(3N)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
  const reversedLinkedList = (node) => {
    let previous = null;
    let currentNode = node;
    
    while(currentNode) {
      const temp = currentNode.next;
      currentNode.next = previous;
      previous = currentNode;
      currentNode = temp;  null
    }
    
    return previous;
  }
  
  let reversed = reversedLinkedList(head);

  // remove nth node in a reveredLinkedList
  let counter = 1;
  let previousNode = null;
  let currentNode = reversed;

  while(counter <= n) {
    if (counter === n) {
      // edge case: when n = 1
      if(!previousNode) {
        reversed = currentNode.next; // null
      } else {
        previousNode.next = currentNode.next;          
      }

      break;  
    }
    
    previousNode = currentNode;
    currentNode = currentNode.next;
    counter++;
  }

  // reversed the reversed linked list
  return reversedLinkedList(reversed);
};

// * Two Pass
// Time: O(2N)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
  let length = 0;
  let currentNode = head;
  
  while(currentNode) {
    currentNode = currentNode.next;
    length++;
  }
  
  let nodeBeforeRemoveIdx = length - n;

  if(nodeBeforeRemoveIdx === 0) {
    return head.next;
  }
  
  currentNode = head;
  
  for(let i = 1; i < nodeBeforeRemoveIdx; i++) {
    currentNode = currentNode.next;
  }
  
  currentNode.next = currentNode.next.next;
  
  return head;
}; 

// *two pointer
// Time: O(N)
// Space: O(1)
var removeNthFromEnd = function(head, n) {
  let currentNode = head;
  let beforeRemovedNode = head;
  
  for(let i = 0; i < n; i++) {
    currentNode = currentNode.next;
  }

  if(!currentNode) return head.next;
  
  while(currentNode.next) {
    currentNode = currentNode.next;
    beforeRemovedNode = beforeRemovedNode.next;
  }
    
  beforeRemovedNode.next = beforeRemovedNode.next.next;
  return head;
};