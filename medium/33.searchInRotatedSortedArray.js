
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Type: Binary Search Tree, BST
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
    const middle = Math.floor((left + right) / 2);
    const middleVal = nums[middle];
    
    if(middleVal === target) return middle;
    
    // left sorted portion
    if(nums[left] <= middleVal) {
      if(target > middleVal || target < nums[left]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    } else {
      if(target < nums[middle] || target > nums[right]) {
        right = middle - 1
      } else {
        left = middle + 1;
      }
    }
  }
  
  return -1;
};