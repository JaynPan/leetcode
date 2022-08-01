/**
 * @param {number[]} nums
 * @return {boolean}
 */

// * DP memoization
// Time: O(N^2), in each recursion, we looping until the maximum step, if the max step is === nums.length, then it is O(N*N)
// Space: O(N)
var canJump = function(nums) {
  const cache = {};
  
  const helper = (index) => {
    if(index === nums.length - 1) return true;
    if(nums[index] === 0) return false;
    if(index in cache) return cache[index];
    
    let hasPathToReachLastIdx = false;
    
    for(let step = 1; step <= nums[index]; step++) {
      const canReach = helper(index + step);
      
      cache[index + step] = canReach;
      
      if(canReach) {
        hasPathToReachLastIdx = true;
        break;
      }
    }
    
    return hasPathToReachLastIdx;
  }
  
  return helper(0);
};