/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// * Tow pointer
// Time: O(N*logN + N^2)
// Space: O(1)

// it's the extend question of 167.
var threeSum = function(nums) {
  nums.sort((a, b) => a - b);
  
  const res = [];

  for(let i = 0; i < nums.length - 2; i++) {
    // each solution should be unique. Thus, since the array is sorted
    // we skip the same integer
    if(i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    
    let left = i + 1;
    let right = nums.length - 1;
    const currentInt = nums[i];

    while (left < right) {
      const sum = nums[left] + nums[right] + currentInt;
      
      if(sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        res.push([currentInt, nums[left], nums[right]]);    
        left++;
        
        // skip the same integer again
        while(nums[left] === nums[left - 1] && left < right) {
          left++;
        }
      }
    }
  }
  
  return res;
};