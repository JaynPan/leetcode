/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

var wordBreak = function(s, wordDict) {
  const helper = (start) => {
    if(start === s.length) return true;

    // end <= s.length since substring excluding end position character. Thus, + 1
    for(let end = start + 1; end <= s.length; end ++) {
      if (wordDict.includes(s.substring(start, end)) && helper(end)) {
        return true;
      }
    }

    return false;
  }

  return helper(0);
};

var wordBreakMemo = function(s, wordDict) {
  const memo = {};

  const helper = (start) => {
    if(start === s.length) return true;

    if(typeof memo[start] === 'boolean') return memo[start];

    for (let end = start + 1; end <= s.length; end ++) {
      if (wordDict.includes(s.substring(start, end)) && helper(end)) {
        return memo[start] = true;
      }
    }

    return memo[start] = false;
  }

  return helper(0);
};

// console.log(wordBreakMemo("leetcode", ["leet","code"]));
console.log(wordBreakMemo("leet", ["l", "e", "ee", "lee", "t"]));