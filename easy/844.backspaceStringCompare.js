/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Time: O(N + M) N: s.length, M: t.length
// Space: O(1)
var backspaceCompare = function(s, t) {
  // the final string depends on how many backspace keystrokes
  // we can iterate through the string in reverse
  // use "backspaceCount" to record the keystrokes, while the count is not zero we skip the current character
  const finalString = (val) => {
      let index = val.length - 1;
      let result = "";
      let backspaceCount = 0;

      while(index >= 0) {
          if(val[index] === '#') {
              backspaceCount++;
          } else {
              if (backspaceCount === 0) {
                  result = val[index] + result;
              } else {
                  backspaceCount--;
              }
          }

          index --;
      }
      
      return result;
  }
  
  return finalString(s) === finalString(t);
};

console.log(backspaceCompare("ab#c", "ad#c")) // true
console.log(backspaceCompare("ab##", "c#d#")) // true
console.log(backspaceCompare("a#c", "b")) // false