/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time: O(N^2)
// Space: O(N) recursive call stack
var subsets = function(nums) {
  const res = [];
  
  const helper = (set, i) => {
    if(i === nums.length) {
       res.push(set);
       return;
    };
    
    helper([...set, nums[i]], i + 1);
    helper(set, i + 1);
  }

  helper([], 0);
  return res;
};