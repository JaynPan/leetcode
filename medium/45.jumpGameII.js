/**
 * @param {number[]} nums
 * @return {number}
 */

// * Greedy
// Time: O(N)
// Space: O(1)
var jump = function(nums) {
  let step = 0;
  let left = 0;
  let right = 0;
  
  while(right < nums.length - 1) {
    let maxRight = 0;
    
    for (let i = left; i <= right; i++) {
      maxRight = Math.max(i + nums[i], maxRight);
    }
    
    left = right + 1;
    right = maxRight;
    step += 1;
  }
  
  return step;
};