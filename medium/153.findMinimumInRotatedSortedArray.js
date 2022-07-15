/**
 * @param {number[]} nums
 * @return {number}
 */

// * BST, Binary Search Tree

// set a smallest target that outside the constraint
// in each divide and conquer, we check which side is sorted portion
// if left side, the nums[left] has the smallest number in the sorted portion
// if right side, the nums[mid] has the smallest number
// check until left > right
var findMin = function(nums) {
  let right = nums.length - 1;
  let left = 0;
  let min = Number.POSITIVE_INFINITY;
  
  while(left <= right) {
    const mid = Math.floor((left + right) / 2);
        
    if(nums[left] <= nums[mid]) {
      min = Math.min(min, nums[left]);
      left = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      right = mid - 1;
    }
  }
  
  return min;
};