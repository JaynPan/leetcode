/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// * two pointer approach:
// convert linked list into array and use two-pointer to check whether is palindrome

// Time: O(N), convert linkedList to array over time cost is O(N), find palindrome is O(N/2)
// This give us O(N + N/2), and we always drop the constants. Thus, O(N)

// SpaceL O(N), create a array and store N nodes in it.
var isPalindromeTwoPointer = function(head) {  
  let node = head;
  const list = [];
  
  while(node) {
      list.push(node.val);
      node = node.next;
  }
  
  let left = 0;
  let right = list.length - 1;
  
  while(left < right) {
      if(list[left] !== list[right]) {
          return false;
      }
      
      left++;
      right--;
  }
  
  return true;
};
