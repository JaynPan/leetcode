/**
 * @param {number} n
 * @return {string[]}
 */

// * Backtracking
var generateParenthesis = function(n) {
  const combinations = [];
  
  const helper = (string, open, close) => {
    if(open + close >= 2*n - 1) {
      combinations.push(`${string})`);
      return;
    }
    
    if(open > close) {
      helper(`${string})`, open, close + 1);  
    }

    if (open < n) {
      helper(`${string}(`, open + 1, close);  
    }
  }

  helper("(", 1, 0);
  return combinations;
};

// * Recursion + Stack: generate all combinations and then filter out the invalid combination
// Time: 
// O(2^(2N - 2) * 2N + N): 
// if n = 3, there are 6 character in the string, and each time recursion call there are two choice, "(" or ")". Thus, 2^2N
// While the first letter always need to be open parenthesis and the last letter always need to be close parenthesis, so 2^(2N - 2)

// the isValidParenthesis function iterate each character, and the length of the string is 2N
// Finally, the combinations length is 2^(2N - 2), short for O(N)

// Space: O(2^(2N - 2)* 2N)
// we use combinations to store O(2^(2N - 2)), and using stack when iterate each combination
var generateParenthesis = function(n) {
  const combinations = [];
  const charactersLength = n*2
  
  const helper = (string, count) => {
    if(count >= charactersLength - 1) {
      combinations.push(`${string})`);
      return;
    }

    helper(`${string}(`, count + 1);
    helper(`${string})`, count + 1);
  }

  
  helper("(", 1);
  
  const isValidParenthesis = (s) => {
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
      if(s[i] === '(') {
        stack.push(s[i]);
        continue;
      }
      
      if(!stack.pop()) return false;
    }
    
    return !stack.length;
  }
  
  return combinations.filter((combination) => isValidParenthesis(combination));
};