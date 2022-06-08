/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Type: Floyd's Tortoise and Hare, Fast & Slow pointer

// * Method 2: Floyd's Cycle Finding Algorithm
// Time: O(N), Space: O(1)
// Technically, Time: O(N + K), where N is the node of straight track, and the K is the cyclic track
// Imagine the slower runner is one step behind the fast runner, the fast runner takes K + 1 step to catch up the slow runner
var hasCycle = function(head) {
  let fast = head;
  let slow = head;
  
  while(fast && fast.next) {
    slow = slow.next;
    fast = fast.next?.next;
    if(fast === slow) return true;
  }
  
  return false;
};

// * Method 1: Hash Map
// Time: O(N), Space: O(N)
var hasCycle = function(head) {
  let set = new Set();
  
  while(head) {
      if(set.has(head)) return true;
      
      set.add(head);
      head = head.next;
  }
  
  return false;
};