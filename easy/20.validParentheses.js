/**
 * @param {string} s
 * @return {boolean}
 */

// Time: O(N)
// Space: O(N), in the worst case we will push all characters into stack. Thus, O(N)
var isValid = function(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
      const topStackVal = stack[stack.length - 1];

      if((s[i] === "}" && topStackVal === "{") ||
         (s[i] === "]" && topStackVal === "[") ||
         (s[i] === ")" && topStackVal === "(")
        ) {
          stack.pop();
      } else {
          stack.push(s[i])            
      }
  }
  
  return stack.length === 0;
};

console.log(isValid("([{}]{})")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false