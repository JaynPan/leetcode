/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// * backtracking
// Time: O(2^T) T is the target if candidates include 1
// Space: O(T), call stack
var combinationSum = function(candidates, target) {
  const res = [];
  
  const helper = (comb, sum, i) => {
    if(i >= candidates.length || sum > target) return;
    if(sum === target) return res.push([...comb]);
    
    comb.push(candidates[i]);
    helper(comb, sum + candidates[i], i); 
    comb.pop();
    helper(comb, sum, i + 1);
  }
  
  helper([], 0, 0);
  return res;
};