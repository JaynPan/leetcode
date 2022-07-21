/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// * Array, Sorted, HashMap, Anagrams
// Time: (N * S*LogS + 2N)
// Space: O(3N)
var groupAnagrams = function(strs) {
  const sortedStrs = [];
  const map = {};
  const groups = [];
  
  // O(N)
  for (const str of strs) {
    // O(S*LogS)
    const sortedStr = str.split("").sort((a, b) =>  a.charCodeAt() - b.charCodeAt()).join("");
    sortedStrs.push(sortedStr);
  }
  
  // O(N)
  for (let i = 0; i < sortedStrs.length; i++) {
    if(sortedStrs[i] in map) {
      map[sortedStrs[i]].push(strs[i]);
    } else {
      map[sortedStrs[i]] = [strs[i]];
    }
  }
  
  // O(N) in the worst case
  for (const group of Object.values(map)) {
    groups.push(group);;
  }
  
  return groups;
};

// * String Builder, Hash
// Time: ((N * (S + 26)) + N)
// Space: O(N), if output array is not count as extra space
var groupAnagrams = function(strs) {
  const map = {};
  const groups = [];
  
  // O(N)
  for (const str of strs) {
    let strRepresentedInNumber = "";
    const letterCount = Array(26).fill(0);
    
    // O(S)
    for (let i = 0; i < str.length; i++) {
      const letterCharCode = str[i].charCodeAt() - 97;
      letterCount[letterCharCode] += 1;
    }
    
    // O(26)
    for(let i = 0; i < 26; i++) {
      strRepresentedInNumber += '#';
      strRepresentedInNumber += letterCount[i];
    }
  
    if(strRepresentedInNumber in map) {
      map[strRepresentedInNumber].push(str);
    } else {
      map[strRepresentedInNumber] = [str];
    }
  }

  // O(N) in the worst case
  for (const group of Object.values(map)) {
    groups.push(group);;
  }
  
  return groups;
};