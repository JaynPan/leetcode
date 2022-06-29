/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Time: O(N)
// Space: O(N)
var productExceptSelf = function(nums) {
  const left = [1];
  const right = [];
  const answer = [];
  
  for(let i = 1; i < nums.length; i++) {
      left[i] = left[i - 1] * nums[i - 1];
  }
  
  right[nums.length - 1] = 1;
  
  for(let i = nums.length - 2; i >= 0; i--) {
      right[i] = nums[i + 1] * right[i + 1];
  }
  
  for(let i = 0; i < nums.length; i++) {
      answer[i] = right[i] * left[i];
  }
      
  return answer;
};

// Time: O(N)
// Space: O(1)
var productExceptSelf = function(nums) {
  let right = 1;
  const answer = [1];
  
  for(let i = 1; i < nums.length; i++) {
      answer[i] = answer[i - 1] * nums[i - 1];
  }
      
  for(let i = nums.length - 2; i >= 0; i--) {
      right *= nums[i + 1];
      answer[i] *= right;
  }

  return answer;
};