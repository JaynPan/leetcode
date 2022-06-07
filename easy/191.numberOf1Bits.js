/**
 * @param {number} n - a positive integer
 * @return {number}
 */

// Type: Bit, Left Shift

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

console.log(hammingWeight("0000000000000000000000000001011")) // 3
console.log(hammingWeight("00000000000000000000000010000000")) // 1
console.log(hammingWeight("11111111111111111111111111111101")) // 31