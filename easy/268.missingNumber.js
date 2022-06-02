/**
 * @param {number[]} nums
 * @return {number}
 */

// Type: Bit manipulation

// hash map
// Time: O(N)
// Space: O(N), to store nums.length range sets
var missingNumber = function(nums) {    
  const map = {};
  
  for (let i = 0; i <= nums.length; i++) {
      map[i] = true;
  }
  
  for (let i = 0; i < nums.length; i++) {
      delete map[nums[i]];
  }
  
  return Object.keys(map)[0];
};

// *Bit XOR
// Space: O(1)
var missingNumber = function(nums) {
  let missing = nums.length;
  
  for (let i = 0; i < nums.length; i++) {
      missing ^= i ^ nums[i];
  }
  
  return missing;
};