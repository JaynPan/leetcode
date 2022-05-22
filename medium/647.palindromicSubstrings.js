/**
 * @param {string} s
 * @return {number}
*/

// Time: O(N^2)
// Space: O(1)

// 解題技巧：
// 每一個 substring 都可以視為是中心點，中心點往外延伸的字串是對稱的則可繼續延伸直到兩邊不對稱為止
// 奇偶數皆可被視為中心點，只是奇數是以一個字作為中心，偶數需要兩個

// 以 "civic"為例，視 i 為奇數的中心點，往左右邊延伸時由於左邊沒有東西了，所以換到 "c"
// 此時，c 往左右延伸剛好都是 i，所以 matchCount +1，再繼續延伸，都是 "v" 再加一

// 偶數時以 "baab" 為例，假設現在到 "aa" 為中心點，因為兩兩相同所以 match +1，往外延伸 "aabb" 也是 palindromes 再 +1
// 因此總共會有 "b" "a" "a" "b" "aa" "baab" 總共 6 個 palindromes

var countSubstrings = function(s) {
  let matchCount = 0;
  
  for(let i = 0; i < s.length; i+=1) {
      // odd palindromes
      matchCount += findPalindromesFromCenter(i, i);
      
      // even palindromes
      matchCount += findPalindromesFromCenter(i, i +1);
  }
      
  function findPalindromesFromCenter(low, high) {
      let count = 0;
      
      while(low >= 0 && high < s.length) {
          if(s.charAt(low) !== s.charAt(high)) break;
          
          low --;
          high ++;
          count++;            
      }
      
      return count;
  }
  
  return matchCount;

};

console.log(countSubstrings("abc")) // 3
console.log(countSubstrings("aaa")) // 6
console.log(countSubstrings("baab")) // 6
console.log(countSubstrings('civic')) // 7
