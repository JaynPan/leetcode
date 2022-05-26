/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// ! Brute force, cumulate sum each time
// Time: O(n*k)
// Space O(1), in each iteration variable "sum", "right" gets destroyed.
var findMaxAverage = function(nums, k) {
  let maxAvg = Number.NEGATIVE_INFINITY;
  
  for(let left = 0; left <= nums.length - k; left ++) {
      let sum = 0;
      let right = left;
      
      while(right - left < k) {
        count +=1;
        sum += nums[right];
        right ++;
      }
      
      maxAvg = Math.max(maxAvg, sum / k);
  }
  
  return maxAvg;
};

// * Sliding window approach can reduce space complexity
// Time: O(N)
// Space: O(1), only use constant "sum" & "max" space
var findMaxAverageSlidingWindow = function(nums, k) {
  let sum = 0;
  
  for(let i = 0; i < k; i++) {
    sum += nums[i];
  }

  let max = sum;

  for(let right = k; right < nums.length; right++) {
    const left = right - k;
    sum += nums[right] - nums[left];
    max = Math.max(max, sum);
  }

  return max / k;
}

console.log(findMaxAverageSlidingWindow([1,12,-5,-6,50,3], 4))
console.log(findMaxAverageSlidingWindow([-1], 1))