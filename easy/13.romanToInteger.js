/**
 * @param {string} s
 * @return {number}
 */

 var romanToInt = function(s) {
  let sum = 0;
  const map = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
      "IV": 4,
      "IX": 9,
      "XL": 40,
      "XC": 90,
      "CD": 400,
      "CM": 900
  }
  
  let i = s.length - 1;
  
  while(i >= 0) {
      const character = s[i];
      // the purpose of pair is to check whether it is subtraction cases
      const pair = map[s.substring(i - 1, i + 1)];
      
      if(i > 0 && pair) {
          sum += pair;
          i-= 2;
      } else {
          sum += map[s[i]];
          i--;            
      }
  }
  
  return sum;
};