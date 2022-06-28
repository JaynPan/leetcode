/**
 * @param {number[]} nums
 * @return {number}
 */

// * Boyer-Moore Voting Algorithm

// Time: O(N)
// Space: O(1)
var majorityElement = function(nums) {
  let count = 0;
  let candidate = null;
  
  for(const num of nums) {
      if(count === 0) candidate = num;
      count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// * Sort
// Time: O(N * logN), depending on js sorting algorithm
// Space: O(1)
var majorityElement = function(nums) {
  const sorted = nums.sort();
  return sorted[Math.floor(nums.length / 2)];
};