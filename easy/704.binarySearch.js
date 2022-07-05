/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Type: BST, binary search tree

// 解題技巧：既然是 sorted array，可使用 divide and conquer 技巧
// * Recursion
var search = function(nums, target) {
  const helper = (start, end) => {
    if(start > end) {
      return -1;
    }

    const middleIndex = Math.floor((start + end) / 2);

    if(nums[middleIndex] === target) {
      return middleIndex;
    }

    // 表示 target 比目前中間值還大，往右側尋找
    if(target > nums[middleIndex]) {
      return helper(middleIndex + 1, end);
    }

    // 表示 target 比目前中間值還小，往左側尋找
    if(target < nums[middleIndex]) {
      return helper(start, middleIndex -1);
    }
  }
 
  return helper(0, nums.length - 1);
};

// * Two pointer
var searchTwoPointer = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  
  while(left <= right) {
      const middle = Math.floor((left + right) / 2);

      if(nums[middle] === target) return middle;

      if(nums[middle] > target) {
          right = middle - 1;
      } else if(nums[middle] < target) {
          left = middle + 1;   
      }
  }
  
  return -1;
};

const nums = [-1,0,3,5,9,12, 18]; // target = 9

console.log(search(nums, 9)); // 4
console.log(search(nums, 2)); // -1