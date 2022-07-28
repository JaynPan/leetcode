/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */ 

// * Sliding window
// Time: O((26 + N) * M) s1: N, s2: M
// Space: O(26 + 26M)
var checkInclusion = function(s1, s2) {
  let left = 0;
  let map = {};

  // O(N)
  for(let i = 0; i < s1.length; i++) {
    if(s1[i] in map) {
      map[s1[i]] += 1;
    } else {
      map[s1[i]] = 1;
    }
  }
  
  // O(M - N) in the worst case, N = 1, the time complexity is O(M)
  for(let right = s1.length - 1; right < s2.length; right++) {
    const subMap = {};
    
    // O(N)
    for(let i = left; i <= right; i++) {
      if(s2[i] in subMap) {
        subMap[s2[i]] += 1;
      } else {
        subMap[s2[i]] = 1;
      }
    }
    
    let isPermutation = true;

    // O(26) in the worst case, the map contain all letters
    for(const [key, int] of Object.entries(map)){
      if(int !== subMap[key]) {
        isPermutation = false;
        break;
      }      
    }
    
    if(isPermutation) return true;

    left++;
  }
  
  return false;
};