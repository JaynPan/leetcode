/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// * Sliding window
// Time: O(26N), in the worst case, the map contains 26 keys, then we need to iterate through each key
// Space: O(26)
var characterReplacement = function(s, k) {
  let left = 0;
  let longest = 0;
  const map = {};
  
  for(let right = 0; right < s.length; right++) {
    const slidingWindowLength = right - left + 1;
    let max = 0;
    
    if(s[right] in map) {
      map[s[right]] += 1;
    } else {
      map[s[right]] = 1;
    }
    
    for(const val of Object.values(map)) {
      max = Math.max(max, val);
    }
    
    if((slidingWindowLength - max) <= k) {
      longest = Math.max(longest, slidingWindowLength);
    } else {
      map[s[left]] -= 1;
      left++;
    }
  }
  
  return longest;
};