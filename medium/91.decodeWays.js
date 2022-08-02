/**
 * @param {string} s
 * @return {number}
 */

// DP (bottom up)
// Time: O(N)
// Space: O(N)
var numDecodings = function(s) {
  let dp = Array(s.length + 1).fill(1);
  
  for(let i = s.length - 1; i >= 0; i--) {
    if(s[i] === "0") {
      dp[i] = 0;
    } else {
      dp[i] = dp[i + 1];
    }
    
    const twoDigits = (i + 1) < s.length ? Number(s.substring(i, i + 2)) : undefined;

    if(twoDigits && (twoDigits >= 10 && twoDigits <= 26)) {
      dp[i] += dp[i + 2];
    }
  }
  
  return dp[0];
};

// * DP + memoization
// Time: O(N)
// Space: O(N)
var numDecodings = function(s) {
  const cache = {};
  
  const helper = (index) => {
    if(index in cache) return cache[index];
    
    if(index >= s.length || index === s.length -1  && s[index] !== "0") {
      return 1;
    }
    
    if(s[index] === "0") return 0;
    
    const twoDigits = (index + 1) < s.length ? Number(s.substring(index, index + 2)) : undefined;
    let count = 0;
    
    if(twoDigits && twoDigits <= 26 && s[index + 2] !== "0") {
      count += helper(index + 2);
    }
    
    if(s[index + 1] !== "0") {
      count += helper(index + 1);
    }
    
    cache[index] = count;
    return count;
  }

  return helper(0);
};

// * decision tree
// ! Time Limit Exceeded
// Time: O(2^N)
var numDecodings = function(s) {
  let count = 0
  
  const helper = (index) => {
    if(index >= s.length || index === s.length -1  && s[index] !== "0") {
      count++;
      return;
    }
    
    if(s[index] === "0") return;
    
    const twoDigits = (index + 1) < s.length ? Number(s.substring(index, index + 2)) : undefined;
    
    if(twoDigits && twoDigits <= 26 && s[index + 2] !== "0") {
      helper(index + 2);
    }
    
    if(s[index + 1] !== "0") {
      helper(index + 1);
    }
  }

  helper(0);
  return count;
};