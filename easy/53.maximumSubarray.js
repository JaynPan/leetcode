/**
 * @param {number[]} nums
 * @return {number}
 */

// Type: DP, Kadane's algorithm

var maxSubArray = function(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  
  for(const num of nums) {
    // when currentSum is negative, rest currentSum
      currentSum = Math.max(num, currentSum + num)
      maxSum = Math.max(maxSum, currentSum)
  }
  
  return maxSum;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])) // 6

// Extend: return longest subarray instead of max sum
var maxSubArray1 = function(nums) {
  let currentSum = nums[0];
  let maxSum = nums[0];
  let left = 0;
  let right = 0;
  
  for (let i = 1; i < nums.length; i ++) {
    if(currentSum < 0) {
      left = i;
      currentSum = nums[i];
    } else {
      currentSum += nums[i]
    }

    if(currentSum > maxSum) {
      right = i;
      maxSum = currentSum;
    }
  }
  
  return nums.slice(left, right + 1);
};

console.log(maxSubArray1([-2,1,-3,4,-1,2,1,-5,4])) // [ 4, -1, 2, 1 ]
console.log(maxSubArray1([1])) // [1]
console.log(maxSubArray1([5,4,-1,7,8])) // [ 5, 4, -1, 7, 8 ]
