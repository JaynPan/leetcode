/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Type: Two pointer

// Time: O(N)
// Space: O(N), the output result takes N spaces
var sortedSquares = function(nums) {
  let count = nums.length - 1;
  let right = nums.length - 1;
  let left = 0;
  let result = [];
  
  while(count >= 0) {
      const leftVal = Math.abs(nums[left]);
      const rightVal = Math.abs(nums[right]);

      if(leftVal >= rightVal) {
          result[count] = Math.pow(leftVal, 2);
          left++;
      } else {
          result[count] = Math.pow(rightVal, 2);
          right--;
      }
      
      count --;
  }
  
  return result;
};