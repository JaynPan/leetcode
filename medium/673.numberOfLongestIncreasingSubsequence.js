/**
 * @param {number[]} nums
 * @return {number}
 */

// * DP
var findNumberOfLIS = function(nums) {
  const dp = {};
  
  for(let i = nums.length - 1; i >= 0; i--) {
      let maxLength = 1;
      let maxCount = 1;
      
      for (let j = i + 1; j < nums.length; j++) {
          const { length, count } = dp[j];

          // make sure it is increasing order
          if (nums[i] < nums[j]) {
              // adding one value to the subsequence, thus + 1
              if (length + 1 > maxLength) {
                  maxLength = length + 1;
                  maxCount = count;
              } else if (length + 1 === maxLength) { // find another subsequence that has the same length
                  maxCount += count;
              }
          }
      }
      
      dp[i] = { length: maxLength, count: maxCount };
  }

  let result = 0;
  let lenLIS = 0;
  
  for(let i = 0; i < nums.length; i++) {
      const { length, count } = dp[i];

      if (length > lenLIS) {
          lenLIS = length;
          result = count;
      } else if(length === lenLIS){
          result += count;
      }
  } 
  
  return result;
};