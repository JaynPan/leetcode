/**
 * @param {number} n
 * @return {number[]}
 */

// method 1: Brute force
// iterate through n
// get bit representation of the given integer
// filter bit which has set to 1

// Time: O(n * largestBitLength)
var countBits = function(n) {  
  const result = [];
  
  for(let i = 0; i <= n; i++) {
      const bits = i.toString(2).split("");
      result.push(bits.filter((bit) => bit === "1").length);
  }
  
  return result;
};

// method 2: bit manipulation / pop count
var countBits = function(n) {    
  const result = [];
  
  const popCount = (int) => {
      let sum = 0;
      
      while(int != 0) {
          sum ++;
          int &= (int - 1)
      }
      
      return sum;
  }
  
  for(let i = 0; i <= n; i++) {
      result.push(popCount(i))
  }
  
  return result;
};
