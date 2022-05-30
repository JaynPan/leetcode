/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


// TYPE: array, recursion, while loop

Array.prototype.swapItems = function(a, b){
  this[a] = this.splice(b, 1, this[a])[0];
  return this;
}

// * Recursion: runtime is lower than average
// Time: O(N / 2) => O(N) N: array length
// Space: O(N): recursion stack
var reverseStringR = function(s) {
  const middle = Math.floor(s.length / 2);
  const helper = (index) => {
      if (index >= middle) {
          return;
      }
      
      s.swapItems(index, s.length - 1 - index);
      helper(index + 1);
  }
  
  return helper(0);
};

// * while loop
// Time: O(N)
// Space: O(1)
var reverseString = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;

      left ++;
      right --;
  }

  return s;
};

console.log(reverseString(["h","e","l","l","o"]));