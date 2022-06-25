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
  }
  
  let i = s.length - 1;
  
  while(i >= 0) {
      const character = s[i];
      
      if(((character === 'V' || character === 'X') && s[i-1] === 'I') ||
         ((character === 'L' || character === 'C') && s[i-1] === 'X') ||
         ((character === 'D' || character === 'M') && s[i-1] === 'C')
        ) {
          sum += map[s[i]] - map[s[i -1]];
          i-= 2;
      } else {
          sum += map[s[i]];
          i--;            
      }
  }
  
  return sum;
};