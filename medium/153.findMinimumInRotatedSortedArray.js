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

// * optimize first implementation logic
var findMin = function(nums) {
  let right = nums.length - 1;
  let left = 0;
  let min = nums[0];
  
  while(left <= right) {
    // imaging the first time into the while loop
    // left: 0, right: nums.length - 1, means the nums is sorted ascending
    // then the min num is the fist item

    if(nums[left] < nums[right]) {
      min = Math.min(min, nums[left]);
      break;
    }

    const mid = Math.floor((left + right) / 2);
      
    min = Math.min(min, nums[mid]);

    // find the sorted portion
    // if sorted portion is at right-hand side, means the smallest value should at the left portion
    if(nums[left] <= nums[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return min;
};