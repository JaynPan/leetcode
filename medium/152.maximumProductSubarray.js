/**
 * @param {number[]} nums
 * @return {number}
 */

// * DP
var maxProduct = function(nums) {
  let res = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    res = Math.max(res, nums[i]);
  }
  
  // we can treat 1 as a neutral number
  let max = 1;
  let min = 1;
  
  for(const num of nums) {
    if(num === 0) {
      max = 1;
      min = 1;
      continue;
    }
    
    let tempMax = Math.max(num * max, num * min, num);
    let tempMin = Math.min(num * max, num * min, num);
    res = Math.max(res, tempMax);
    max= tempMax;
    min = tempMin;
  }
  
  return res;
};