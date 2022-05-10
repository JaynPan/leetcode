/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    const helper = (start, end) => {
      if (start > end) {
        return start;
      }

      const middleIndex = Math.floor((start + end) / 2);

      if (nums[middleIndex] === target) {
        return middleIndex
      }

      if(target > nums[middleIndex]) {
        return helper(middleIndex + 1, end)
      }

      if(target < nums[middleIndex]) {
        return helper(start, middleIndex - 1)
      }
    }

    return helper(0, nums.length - 1);
};

var searchInsertWhileLoop = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while(left <= right) {
    const pivot = Math.floor((left + right) / 2);

    if(nums[pivot] === target) {
      return pivot;
    }

    if(nums[pivot] > target) {
      right = pivot - 1;
    }

    if(nums[pivot] < target) {
      left = pivot + 1;
    }
  }

  return left;
}

const nums = [1,3,5,6]
const nums2 = [2, 3, 5, 6];

console.log(searchInsert(nums, 5)) // 2

// 1. start, end -> 0, 3
// 2. start, end -> 0, 0
// 3, start, end -> 1, 0
// return 1
console.log(searchInsert(nums, 2)) // 1

// 1. start, end -> 0, 3
// 2. start, end -> 2, 3
// 3. start, end -> 3, 3
// 4. start, end -> 4, 3 
// return 4
console.log(searchInsert(nums, 7)) // 4
