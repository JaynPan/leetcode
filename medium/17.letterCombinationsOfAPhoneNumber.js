/**
 * @param {string} digits
 * @return {string[]}
 */

// 此題的 time complexity 4^(digits.length)，其中 4 是由於 digit 對應的最多的字母為 4，例如 "9" 對應了 "wxyz" 四個字母
// 基本上最困難的點是要怎麼印出這些組合，我的想法是透過遞迴的方式
var letterCombinations = function(digits) {
  if(digits.length === 0) {
      return [];
  }

  const letters = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz",
  }
  const combinations = [];

  const backtrackingHelper = (path, index) => {
    if(index > digits.length - 1) {
      const joined = path.join("");
      combinations.push(joined);
      return;
    }

    const possibleLetters = letters[digits[index]];

    for(let i = 0; i < possibleLetters.length; i += 1) {
      path.push(possibleLetters[i]);
      backtrackingHelper(path, index + 1);
      path.pop();
    }
  }

  backtrackingHelper([], 0);
  return combinations;
};

const input = "23"

console.log(letterCombinations(input));