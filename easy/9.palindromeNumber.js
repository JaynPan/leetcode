/**
 * @param {number} x
 * @return {boolean}
 */

var isPalindrome = function(x) {
  if(x < 0) return false;
  
  let s = x.toString();
  
  let left = 0;
  let right = s.length - 1;
  
  while(left < right) {
    if(s[left] !== s[right]) return false;

    right--;
    left++;
  }
  
  return true;
};