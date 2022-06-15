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

// Hash Map approach
// Time: O(N)
// Space: O(N), in the worst case, all nodes are unique, then consume N memory space
var deleteDuplicatesHash = function(head) {
  const cache = new Set();
  let currentNode = head;
  let prevNode = null;
  
  while(currentNode) {
      if(cache.has(currentNode.val)) {
          prevNode.next = currentNode.next;
      } else {
          cache.add(currentNode.val);
          prevNode = currentNode;
      }
      
      currentNode = currentNode.next;
  }
  
  return head;
};

// * reduce space complexity to constant time
// Since the linked list is sorted, we can compare the current node and the node after.
// if it's the same, we change the next pointer to the next next node
var deleteDuplicates = function(head) {
  let currentNode = head;
  
  while(currentNode && currentNode.next) {
      if(currentNode.val === currentNode.next.val) {
          currentNode.next = currentNode.next.next;
      } else {
          currentNode = currentNode.next;
      }
  }
  
  return head;
};