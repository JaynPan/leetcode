/**
 * @param {number[]} nums
 * @return {number}
 */

// * Array, Sort
// Time: O(N*LogN)
// Space: O(1)
var longestConsecutive = function(nums) {
  if(nums.length <= 1) return nums.length;
  
  let max = Number.NEGATIVE_INFINITY;
  let count = 1;
  
  nums.sort((a, b) => a - b);
  
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i] - nums[i - 1]) === 1) {
      count++;
    } else if (Math.abs(nums[i] - nums[i - 1]) > 1){
      count = 1;
    }
    
    max = Math.max(max, count);
  }
  
  return max;
};