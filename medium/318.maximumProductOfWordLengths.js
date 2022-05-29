/**
 * @param {string[]} words
 * @return {number}
 */

// Intuitive approach
// Time: O(N^2 * L1*L2), N: length of array, L1 & L2: comparing word1 length and word2 length
// Space: O(1)
var maxProductBrute = function(words) {
    let result = 0;

    for(let i = 0; i < words.length; i++) {
      for(let j = i + 1; j < words.length; j++) {
        let noCommonChar = true;

        for(let k = 0; k <= words[j].length; k++) {
          if(words[i].indexOf(words[j][k]) !== -1){
            noCommonChar = false;
            break;
          }
        }

        if(noCommonChar) {
          result = Math.max(result, words[i].length * words[j].length);
        }
      }
    }

    return result;
};


// Time: O(N^2 * L1 + L2)
var maxProductWithBitmask = function(words) {
  let result = 0;

  for(let i = 0; i < words.length; i++) {
    for(let j = i + 1; j < words.length; j++) {
      const noCommentLetter = noCommonLetter(words[i], words[j]);

      if(noCommentLetter) {
        result = Math.max(result, words[i].length * words[j].length);
      }
    }
  }

  return result;
};

function noCommonLetter(s1, s2) {
  let bitmask1 = 0;
  let bitmask2 = 0;

  for (let j = 0; j < s1.length; j++)
    bitmask1 |= 1 << (s1.charCodeAt(j) - 97)

  for (let j = 0; j < s2.length; j++)
    bitmask2 |= 1 << (s2.charCodeAt(j) - 97)

  return (bitmask1 & bitmask2) === 0;
}

console.log(maxProductWithBitmask(["abcw","baz","foo","bar","xtfn","abcdef"])); // 16 "abcw", "xtfn".
console.log(maxProductWithBitmask(["a","ab","abc","d","cd","bcd","abcd"])); // 4
console.log(maxProductWithBitmask(["a","aa","aaa","aaaa"])); // 0
