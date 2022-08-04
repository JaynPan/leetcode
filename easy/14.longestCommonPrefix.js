/**
 * @param {string[]} strs
 * @return {string}
 */

// Time: O(M*N) M: sts.length N: character length in str
// in the worst case, all strs are identical, then will take O(M*N) to complete looping
var longestCommonPrefix = function(strs) {
  let prefix = strs[0];
  
  for(let i = 1; i < strs.length; i++) {
    for (let j = 0; j < prefix.length; j++) {
      if(strs[i][j] !== prefix[j]) {
        prefix = prefix.substring(0, j);
        break;
      }
    }
  }

  return prefix;
};