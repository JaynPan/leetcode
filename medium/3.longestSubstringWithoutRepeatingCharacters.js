/**
 * @param {string} s
 * @return {number}
 */

// Use sliding window algorithm may be a great idea
// in this approach, we need two pointers
// right pointer to extends the window and left pointer contract the window
// and a hashmap to record the substring values
// Basically, the right pointer will move until there are two same character in the map
// then, we need to contract the window (move the left pointer until no duplicate character in the map)

// we can take "pwwkew" as an example
// 1. store the "p" to map
// 2. since there are no duplicate "p" inside the map, right pointer can move two ste to index of 2
// 3. because duplicate occur, left pointer move to "p"
// 4. still has duplicated, then remove "p" in map, and move to index 1
// 5. still get duplicated, so remove -1 "w" in the map,
// 6. now no duplicated "w", right pointer can move on to "k"
// 7. then follow this pattern until it reaches the s.length

// Time: O(2n), n = length of the input string, in the worst case, each character will be visited twice
// Space: O(n),
var lengthOfLongestSubstring = function(s) {
  let longestSubstring = 0;
  let right = 0;
  let left = 0;
  const map = {};
  
  while(right < s.length) {
      const rightVal = s.charAt(right);
      map[rightVal] = map[rightVal] ? map[rightVal] + 1 : 1;

      
      while(map[rightVal] > 1) {
          const leftVal = s.charAt(left);
          map[leftVal] = map[leftVal] - 1;
          left += 1;
      }
      
      longestSubstring = Math.max(longestSubstring, right - left + 1);
      right += 1; 
  }
  
  return longestSubstring;
};

// we can record the duplicated index,
// once find duplicated, jump to the duplicated index + 1
var lengthOfLongestSubstringOptimized = function(s) {
  let longestSubstring = 0;
  let left = 0;
  const map = {};
  
  for (let right = 0; right < s.length; right +=1) {
    const rightVal = s.charAt(right);
    const index = map[rightVal];

    if(index !== null && left <= index && index < right) {
      left = index + 1;
    }
    
    longestSubstring = Math.max(longestSubstring, right - left + 1);
    map[rightVal] = right;
  }
  
  return longestSubstring;
}

const s = "abcabcbb"; // abc 3
const s1 = "pwwkew" // kew 3
console.log(lengthOfLongestSubstringOptimized(s1));