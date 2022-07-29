/**
 * @param {number} n
 * @return {boolean}
 */

// * Math, recursive, memo
var isHappy = function(n) {
  const set = new Set();
  
  const helper = (number) => {
    if(set.has(number)) return false;
    set.add(number);
    
    const digits = number.toString().split("");
    let sum = 0;

    for(const digit of digits) {
      sum += Math.pow(Number(digit), 2)
    }

    if(sum === 1) return true;
    return helper(sum);
  };
  
  return helper(n);
};