/**
 * @param {number[]} nums
 * @return {number}
 */

// * DP
var rob = function(nums) {
  if(nums.length < 3) {
    return nums.reduce((max, val) => Math.max(max, val), 0);
  }
  
  const dp1 = [nums[0], Math.max(nums[0], nums[1])];
  const dp2 = [0, nums[1], Math.max(nums[1], nums[2])];
  
  for(let i = 2; i < nums.length; i++) {
    if (i < nums.length - 1) dp1[i] = Math.max(nums[i] + dp1[i - 2], dp1[i - 1]);
    if (i >= 3) dp2[i] = Math.max(nums[i] + dp2[i - 2], dp2[i - 1]);  
  }

  return Math.max(dp1[dp1.length - 1], dp2[dp2.length - 1]);
};
