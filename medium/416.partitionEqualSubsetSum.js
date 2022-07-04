/**
 * @param {number[]} nums
 * @return {boolean}
 */

// * recursion + memo
// Time: O(nums.length * (sum(nums) / 2))
// in the worst case, there is no overlap subproblem
// Space: same as time, using a two dimensional array cache of size O(M*N) and O(N) recursion call stack
var canPartition = function(nums) {
  // array can be partitioned, means the target is sum(nums)/2
  // we find if there is any subset can reach target
  // if yes, which means the sum of the other subset will also be the target
  const target = nums.reduce((acc, val) => acc + val, 0) / 2;
  const cache = {};
  
  const helper = (i, total) => {
      if(i === nums.length) return total === target;
      const cacheKey = i + '.' + total;
      if(cache[cacheKey]) return cache[cacheKey];
      
      cache[cacheKey] = helper(i + 1, total + nums[i]) || helper(i + 1, total);
      return cache[cacheKey];
  }
  
  return helper(0, 0);
};

// * DP Bottom up 
var canPartition = function(nums) {
  const target = nums.reduce((acc, val) => acc + val, 0) / 2;
  
  if(!Number.isInteger(target)) return false;
  
  let set = new Set();
  set.add(0);
  
  for(const num of nums) {
      if(num === target) return true;
      
      const nextSet = new Set();
      
      for(let val of set) {
          const sum = val + num;
          
          if(sum === target) return true;
          
          nextSet.add(sum);
          nextSet.add(val);
      }
      
      set = nextSet;
  }
  
  return false;
};