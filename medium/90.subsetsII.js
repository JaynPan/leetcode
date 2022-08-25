/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// * backtracking
// Time: O(N*2^N)
var subsetsWithDup = function(nums) {
  const res = [];
  nums.sort((a, b) => a - b);

  const backtracking = (subset, index) => {
    if(index >= nums.length) {
      res.push([...subset]);
      return;
    }
    
    subset.push(nums[index]);
    backtracking(subset, index + 1);
    subset.pop();

    while(index + 1 < nums.length && nums[index] === nums[index + 1]) {
      index++;
    }

    backtracking(subset, index + 1);
  }

  backtracking([], 0);
  return res;
};