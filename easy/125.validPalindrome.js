/**
 * @param {string} s
 * @return {boolean}
 */

// * Two pointers
// Time: O(N)
// Space: O(1)
var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  const isAplhaNumeric = (val) => {
      const s = String(val);
      return (s >= 97 && s <= 122) || (s >= 48 && s <= 57);
  }
  
  while(left <= right) {
      const lVal = s[left].toLowerCase().charCodeAt();
      const rVal = s[right].toLowerCase().charCodeAt();

      // dealing with non-alphanumeric situation
      if (!isAplhaNumeric(lVal)) {
          left++;
          continue;
      }
      
      if (!isAplhaNumeric(rVal)) {
          right--;
          continue;
      }
      
      if(lVal === rVal) {
          left++;
          right--;
      } else {
          return false;
      }
  }
  
  return true;
};