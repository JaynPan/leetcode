/**
 * @param {number[]} nums
 * @return {number}
 */

// * DP
// Time: O(N^2), two nested for loops resulting (n * (n + 1)) / 2 
// Space: O(N)
var lengthOfLIS = function(nums) {
  const dp = [];
  let maxLIS = 0;
  
  for (let i = nums.length - 1; i >= 0; i--) {
      dp[i] = 1;
      
      for(let j = i + 1; j < nums.length; j++) {
          const length = dp[j];
          
          // in an increasing order
          if(nums[i] < nums[j]) {
              dp[i] = Math.max(dp[i], length + 1);
          }
      }
      
     maxLIS = Math.max(maxLIS, dp[i]) 
  }
  
  return maxLIS;
};

// Follow up: Can you come up with an algorithm that runs in O(n log(n)) time complexity ?