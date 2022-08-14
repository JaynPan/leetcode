/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// * backtracking
// Time: O(N!)
var permute = function(nums) { 
  const res = [];
  
  if(nums.length === 1) {
    return [nums];
  }
  
  for (let i = 0; i < nums.length; i++) {
    const newSubset = nums.filter((_, currentIdx) => currentIdx !== i);
    const permutations = permute(newSubset);

    for(const permutation of permutations) {
      permutation.push(nums[i]);  
    }

    res.push(...permutations); 
  }

  return res;
};