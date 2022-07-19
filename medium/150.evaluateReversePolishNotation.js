/**
 * @param {string[]} tokens
 * @return {number}
 */

// * Stack
// Time: O(N)
// Space: O(N)
var evalRPN = function(tokens) {
  const stack = [];
  const operatorMaps = {
    "+": "+",
    "-": "-",
    "*": "*",
    "/": "/"
  }
  
  for(let i = 0; i < tokens.length; i++) {
    if(!operatorMaps[tokens[i]]) {
      stack.push(Number(tokens[i]));
      continue;
    }
    
    const firstNumber = stack.pop();
    const secondNumber = stack.pop();
    let res = null;
    
    if(tokens[i] === "+") {
      res = secondNumber + firstNumber;
    } else if (tokens[i] === "-") {
      res = secondNumber - firstNumber;
    } else if (tokens[i] === "*") {
      res = secondNumber * firstNumber;
    } else {
      res = Math.trunc(secondNumber / firstNumber);
    }
    
    stack.push(Number(res));
  }
  
  return stack.pop();
};
