/**
 * @param {string[]} words
 * @return {number}
 */

// Intuitive approach
// Time: O(N^2 * L1*L2), N: length of array, L1 & L2: comparing word1 length and word2 length
// Space: O(1)
// TODO: Can reduce the L1*L2 comparing function to L1 + L2 with bitmasks
var maxProduct = function(words) {
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

console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"])); // 16 "abcw", "xtfn".
console.log(maxProduct(["a","ab","abc","d","cd","bcd","abcd"])); // 4
console.log(maxProduct(["a","aa","aaa","aaaa"])); // 0