/**
 * @param {string} s
 * @return {boolean}
 */

// Time: O(N)
// Space: O(N), in the worst case we will push all characters into stack. Thus, O(N)
var isValid = function(s) {
  const stack = [];
  const map = {
    "{": "}",
    "[": "]",
    "(": ")"
  };
  
  for(let i = 0; i < s.length; i++) {
    if (map[s[i]]) {
      stack.push(s[i]);
      continue;
    }
    
    const topItem = stack.pop();
    
    if(map[topItem] !== s[i]) return false;
  }
  
  return !stack.length;
};

console.log(isValid("([{}]{})")) // true
console.log(isValid("()[]{}")) // true
console.log(isValid("(]")) // false