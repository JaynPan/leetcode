/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// * Recursion + Memo
// !Time Limit Exceeded

// Time: O(N * s) 
// s: the total sum that we can pass into. consider in the worst case, that will be the sum of the entire nums array
var findTargetSumWays = function(nums, target) {
  const cache = {};
  
  const cacheKeyGen = (i, sum) => {
      let isPositive = sum > 0 ? 'p' : 'n';
      return i + '.' + isPositive + '.' + Math.abs(sum);
  }
  
  const helper = (i, sum) => {
      const cacheKey = cacheKeyGen(i, sum);
      
      if(cache[cacheKey]) return cache[cacheKey];
      if(sum === target && i === nums.length - 1) return 1;
      if(i >= nums.length) return 0;
      
      const ways = helper(i + 1, sum + -nums[i + 1]) + helper(i + 1, sum + nums[i + 1]);
      cache[cacheKey] = ways;
      return ways;
  }
  
  return helper(0, -nums[0]) + helper(0, nums[0]);
};

// optimize first recursion func
var findTargetSumWaysOp = function(nums, target) {
  const cache = {};

  const helper = (i, sum) => {
      if(i === nums.length) return sum === target ? 1 : 0;

      const cacheKey =  i + '.' + sum;
      if(cache[cacheKey]) return cache[cacheKey]; 
      
      cache[cacheKey] = helper(i + 1, sum + nums[i]) + helper(i + 1, sum - nums[i]);
      return cache[cacheKey];
  }
  
  return helper(0, 0);
};

console.log(findTargetSumWays([38,7,5,14,29,26,35,35,42,48,14,32,5,1,39,50,3,34,38,10], 49)) // 5706
console.log(findTargetSumWays([2,7,9,13,27,31,37,3,2,3,5,7,11,13,17,19,23,29,47,53], 37)) // 0