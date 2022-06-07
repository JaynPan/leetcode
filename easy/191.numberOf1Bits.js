/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Type: Bit, Left Shift

// * loop and flip approach
var hammingWeight = function(n) {
  // ! in this env, I should transform binary to decimal to make the answer correct
  // still not sure why this happen
  const int = parseInt(n, 2);
  let count = 0;
  
  for(let i = 0; i < 32; i++) {
      if(int & 1 << i) {
          count += 1;
      }
  }
  
  return count
};

// * bit manipulation
var hammingWeightBitManipulation = function(n) {
  let int = parseInt(n, 2);
  let sum = 0;
  
  while(int !== 0) {
    int &= (int - 1);
      sum ++;
  }
  
  return sum;
};

console.log(hammingWeight("0000000000000000000000000001011")) // 3
console.log(hammingWeight("00000000000000000000000010000000")) // 1
console.log(hammingWeight("11111111111111111111111111111101")) // 31


console.log(hammingWeightBitManipulation("0000000000000000000000000001011")) // 3
console.log(hammingWeightBitManipulation("00000000000000000000000010000000")) // 1
console.log(hammingWeightBitManipulation("11111111111111111111111111111101")) // 31