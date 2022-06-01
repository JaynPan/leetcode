/**
 * @param {number[]} nums
 * @return {boolean}
*/

// Type: Array, Hash Map

// Time: O(N), where N is the length of the nums
// Space: O(N)
var containsDuplicate = function(nums) {
  const memo = new Set();
  
  for(let i = 0; i < nums.length; i++) {
      if (memo.has(nums[i])) return true;
      memo.add(nums[i]);
  }
  
  return false;
};