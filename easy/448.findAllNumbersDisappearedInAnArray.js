/**
 * @param {number[]} nums
 * @return {number[]}
 */

// Type: Array

// make use of the input array itself to somehow mark visited numbers
// treating number in the array as index and mark corresponding locations in the array as negative
var findDisappearedNumbers = function(nums) {
  for (let i = 0; i < nums.length; i++) {
      // convert one-based to zero-based
      const currentNumber = Math.abs(nums[i]) - 1;
      nums[currentNumber] = Math.abs(nums[currentNumber]) * -1;
  }
  
  const result = [];
  
  for (let i = 0; i < nums.length; i++) {
      if(nums[i] > 0) {
          result.push(i + 1);
      } 
  }
  
  return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1])); // 5, 6
console.log(findDisappearedNumbers([1,1])); // 2