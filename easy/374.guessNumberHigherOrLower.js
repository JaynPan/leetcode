/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			          1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

// 這一題是 704 的延伸版

var guessNumber = function(n) {
  const helper = (start, end) => {
      const middle = Math.floor((start + end) / 2);
      const guessResult = guess(middle);
      
      if(guessResult === 0)  {
          return middle;
      }
      
      // guess num > pick
      if(guessResult === -1) {
          return helper(start, middle - 1);
      }
      
      if(guessResult === 1) {
          return helper(middle + 1, end);
      }
   }
  
  return helper(1, n);
};