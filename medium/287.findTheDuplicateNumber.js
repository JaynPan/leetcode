/**
 * @param {number[]} nums
 * @return {number}
 */

// sorted
// Time: O(N*LogN)
// Space: O(N*LogN), the sorting take extra space
var findDuplicate = function(nums) {
  const sorted = nums.sort();
  
  for(let i = 1; i < sorted.length; i++) {
      if(nums[i] === nums[i - 1]) return nums[i];
  }
};

// Floyd's tortoise and hare 
// Time: O(N)
// Space: O(1)
var findDuplicate = function(nums) {
  let tortoise = nums[0];
  let hare = nums[0];
  
  while(true) {
      tortoise = nums[tortoise];
      hare = nums[nums[hare]];
      if(tortoise === hare) break;
  }
  
  tortoise = nums[0];
  
  while(tortoise !== hare) {
      tortoise = nums[tortoise];
      hare = nums[hare];
  }
  
  return hare;
};