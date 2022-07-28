/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */ 

// * Sliding Window (Optimized)
// Time: O(N + M + 26), s1: N, s2: M
// Space: o(26)
var checkInclusion = function(s1, s2) {
  if(s1.length > s2.length) return false;
  
  const a1 = Array(26).fill(0);
  const a2 = Array(26).fill(0);
  
  // O(N)
  for(let i = 0; i < s1.length; i++) {
    a1[s1[i].charCodeAt() - "a".charCodeAt()] += 1;
    a2[s2[i].charCodeAt() - "a".charCodeAt()] += 1;
  }
  
  let left = 0;
  let matches = 0;

  // O(26)
  for(let i = 0; i < 26; i++) {
    if(a1[i] === a2[i]) matches += 1;
  }
  
  // O(M)
  for(let right = s1.length; right < s2.length; right++) {
    if(matches === 26) return true;
    const rightS2Idx = s2[right].charCodeAt() - "a".charCodeAt();
    
    a2[rightS2Idx] += 1;
    
    if(a2[rightS2Idx] === a1[rightS2Idx]) {
      matches++;
    } else if (a2[rightS2Idx] === (a1[rightS2Idx] + 1)) {
      matches--;
    }
    
    const leftS2Idx = s2[left].charCodeAt() - "a".charCodeAt();
    
    a2[leftS2Idx] -= 1;
    
    if(a2[leftS2Idx] === a1[leftS2Idx]) {
      matches++;
    } else if ((a2[leftS2Idx] + 1) === a1[leftS2Idx]) {
      matches--;
    }
    
    left++;
  }
  
  return matches === 26;
};


// * Sliding window (first implementation)
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