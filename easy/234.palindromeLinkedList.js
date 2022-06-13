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

// Type: LinkedList

// * Reduce space complexity by modifying the Linked List structure
// 1. find the second half list (handle odd & even cases)
// 2. reverse the second half linked list
// 3. compare whether the reversed list and first half list is identical
// 4. re-reverse back the second half list to avoid mutate the input state
// 5. return the compare result

// Time: O(N)
// Space: O(1)

var isPalindrome = function(head) {
  const reverseList = (list) => {
      // iteration approach
      let current = list;
      let reversed = null;
  
      while(current) {
          let nextNode = current.next;
          current.next = reversed;
          reversed = current;
          current = nextNode;
      }
      
      return reversed;
  }
  
  const compareListIsIdentical = (l1, l2) => {
      let currentL1Node = l1;
      let currentL2Node = l2;
      
      
      while(currentL1Node && currentL2Node) {
          if(currentL1Node.val !== currentL2Node.val) {
              return false;
          }

          currentL1Node = currentL1Node.next;
          currentL2Node = currentL2Node.next;
      }
      
      return true;
  }
  
  const findSecondHalfList = (list) => {
      let fast = list;
      let slow = list;
      let secondHalfList = null;

      while(fast && fast.next) {
          fast = fast.next.next;
          slow = slow.next;
      }

      if(!fast) {
          secondHalfList = slow;
      }

      if(fast && !fast.next) {
          secondHalfList = slow.next;
      }
      
      return secondHalfList;
  }
  
  const secondHalfList = findSecondHalfList(head);
  let reversed = reverseList(secondHalfList);
  let isIdentical = compareListIsIdentical(reversed, head);
  
  // it's a good practice to reverse back the linkedList to original state
  reverseList(reversed);
  return isIdentical;
};

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
