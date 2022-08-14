/**
 * @param {number[]} nums
 * @return {number}
 */

// * Two pointer
// should remove duplicate in-place
var removeDuplicates = function(nums) {
  let slow = 0;
  let fast = 1;
  
  while(fast < nums.length) {
    while(nums[slow] === nums[fast]) {
      nums.splice(fast, 1);
    }
    
    slow = fast;
    fast += 1;
  }
};