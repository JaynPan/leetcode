/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

// * Array, str manipulation
// Time: O(N)
// Space: O(1)
var encode = function(strs) {
  let str = "";
  
  for(let i = 0; i < strs.length; i++) {
    str += (strs[i].length + '#' + strs[i])
  }
  
  return str;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  let currentIdx = 0;
  const decoded = [];
  
  while (currentIdx < s.length) {
    let delimiterIdx = currentIdx;
    
    while(s[delimiterIdx] !== '#') {
      delimiterIdx++;
    }
    
    const strLength = Number(s.slice(currentIdx, delimiterIdx));
    const strStartAt = delimiterIdx + 1;
    const strEndAt = strStartAt + strLength;
    const str = s.slice(strStartAt, strEndAt);
    decoded.push(str);
    currentIdx = strEndAt;
  }
  
  return decoded;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */