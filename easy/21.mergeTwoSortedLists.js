/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Type: Linked List

var mergeTwoLists = function(list1, list2) {
  let list = new ListNode();
  let head = list; // help us easily return the head of merged list later
  
  // iterate until one list has node is empty
  while(list1 && list2) {
      // compare which val is smaller
      // connect the smaller value node to merged list, and increment the target list
      if(list1.val < list2.val) {
          list.next = new ListNode(list1.val);
          list1 = list1.next;
      } else {
          list.next = new ListNode(list2.val);
          list2 = list2.next;
      }
      
      list = list.next;
  }
  
  list.next = list1 || list2;
  
  return head.next;
};