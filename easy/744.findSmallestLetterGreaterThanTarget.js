/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

// Type: Binary Search

// charCodeAt return integer, representing the UTF-16 unit at the given index
// Thus, we can compare each letter in the array and target
// since it is sorted, once we find any letter that is greater than target, return it

// Time: O(N)
// Space: O(1)
var nextGreatestLetter = function(letters, target) {
   const targetInt = target.charCodeAt();
  
  for(const letter of letters) {
      const letterInt = letter.charCodeAt();
      if(letterInt > targetInt) return letter;
  }
  
  return letters[0];
};

// * Binary Search: Divide and conquer
// Since it is sorted array, we can use divide and conquer technique to find the value that is greater than target
var nextGreatestLetterDivideConquer = function(letters, target) {
  let left = 0;
  let right = letters.length - 1;
  
  // find the insert position
  while(left < right) {
      const pivot = Math.floor((left + right) / 2)

      if(letters[pivot] <= target) {
          left = pivot + 1;
      } else {
          right = pivot;
      }
  }
  
  // when the target is greater or equal to insert position letter
  // the right position value will be the smallest value that is larger than target 
  if(letters[left] <= target) {
      return letters[left + 1] || letters[0]
  } else {
      return letters[left]
  }
};