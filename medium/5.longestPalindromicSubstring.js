/**
 * @param {string} s
 * @return {string}
 */

// 可參考 medium 647. 用的是同樣的做法
var longestPalindrome = function(s) {
  let longestSubstring = "";
  
  for(let i = 0; i < s.length; i+=1) {
      findPalindromesFromCenter(i, i)
      findPalindromesFromCenter(i, i + 1);
  }
      
  function findPalindromesFromCenter(low, high) {
      while(low >= 0 && high < s.length) {
          if(s.charAt(low) !== s.charAt(high)) {
              break;
          }
          
          if (longestSubstring.length < high - low + 1) {
              longestSubstring = s.slice(low, high + 1);
          }
          
          low --;
          high ++;
      }
  }
  
  return longestSubstring;
};