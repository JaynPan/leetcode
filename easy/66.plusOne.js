/**
 * @param {number[]} digits
 * @return {number[]}
 */

// * Math
var plusOne = function(digits) {
  let carry = 1;
  
  for(let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    
    digits[i] = sum;
    
    if (sum >= 10) {
      digits[i] = sum - 10;
      carry = 1;
    } else {
      carry = 0;
    }
  }
  
  if(carry > 0) digits.unshift(1);
  return digits;
};