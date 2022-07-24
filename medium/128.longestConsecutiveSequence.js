/**
 * @param {number[]} nums
 * @return {number}
 */

// * Array, Sort
// Time: O(N*LogN)
// Space: O(1)
var longestConsecutive = function(nums) {
  if(nums.length <= 1) return nums.length;
  
  let max = Number.NEGATIVE_INFINITY;
  let count = 1;
  
  nums.sort((a, b) => a - b);
  
  for (let i = 1; i < nums.length; i++) {
    if (Math.abs(nums[i] - nums[i - 1]) === 1) {
      count++;
    } else if (Math.abs(nums[i] - nums[i - 1]) > 1){
      count = 1;
    }
    
    max = Math.max(max, count);
  }
  
  return max;
};

// * Array, Hash map
// Time: O(N)
// Space: O(N)
var longestConsecutive = function(nums) {
  const set = new Set();
  let max = 0;
  
  for (const num of nums) {
    set.add(num);
  }
  
  for(const int of set) {
    // the number is the begining of the sequence
    if(!set.has(int - 1)) {
      let currentInt = int;
      let count = 0;

      while(set.has(currentInt)) {
        count++;
        currentInt++;
        max = Math.max(count, max);
      }
    }
  }
  
  return max;
};