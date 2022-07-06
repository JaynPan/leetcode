/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// * Two pointer
// Time: O(N)
// Space: O(1)
var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  
  while(left < right) {
      const sum = numbers[left] + numbers[right];
      
      if(sum > target) {
          right--;
      } else if (sum < target) {
          left++;
      } else {
          return [left + 1, right + 1];
      }
  }
};