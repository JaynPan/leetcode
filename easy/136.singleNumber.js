/**
 * @param {number[]} nums
 * @return {number}
*/

// three main concept of XOR
// 1. take XOR of zero and some bit, will return bit. 0 ^ a = a
// 2. take XOR to some bit, return 0. a ^ a = 0
// 3. we can arbitrary switch position a ^ b ^ a = (a ^ a) ^ b = b

// utilize these three concept, we can optimize the space to O(1), and time to O(N)
var singleNumber = function(nums) {
  let result = 0;
  
  for(const num of nums) {
      result = result ^ num;
  }
  
  return result;
};