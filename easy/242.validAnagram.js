/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// * sorting
var isAnagramSort = function(s, t) {
  if(s.length !== t.length) return false;

  // O(s*logs)
  const sortedS = s.split('').sort().join("");
  // O(t*logt)
  const sortedT = t.split('').sort().join("");
  
  // O(s)
  for(let i = 0; i < sortedS.length; i++) {
      if(sortedS[i] !== sortedT[i]) return false;
  } 
  
  return true;
};

// * Hash map
// Time: O(S + T)
// Space: O(1)
var isAnagram = function(s, t) {  
  if(s.length !== t.length) return false;
  
  const mapS = {};
  const mapT = {};
  
  for(let i = 0; i < s.length; i++) {
      let countS = mapS[s[i]];
      let countT = mapT[t[i]];
      mapS[s[i]] = countS ? countS + 1 : 1;
      mapT[t[i]] = countT ? countT + 1 : 1;
  }
  
  for(const [key, val] of Object.entries(mapS)) {
      if(val !== mapT[key]) return false;
  }
  
  return true;
};

console.log(isAnagramSort("aacc", "ccac")) // false
console.log(isAnagramSort("a", "ab")) // false
console.log(isAnagramSort("anagram", "nagaram")) // true