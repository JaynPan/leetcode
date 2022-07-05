/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// * BST
// Time: O(N*LogM)
// iterate each rows and use binary search the cols
// Space: O(1)
var searchMatrix = function(matrix, target) {
  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;
  
  for(let i = 0; i <= rows; i++) {
      let left = 0;
      let right = cols;
      
      while(left <= right) {
          const middle = Math.floor((left + right) / 2);
          
          if(matrix[i][middle] < target) {
              left = middle + 1;
          } else if (matrix[i][middle] > target) {
              right = middle - 1;
          } else {
              return true;
          }
      }
  }
  
  return false;
};

// * Search Space Reduction
// Time: O(N + M) because row can only be decremented n times and col can only be incremented m times before reach the boundaries
// Space: O(1)
var searchMatrix = function(matrix, target) {
  // from bottom-left we can see the top value is smaller than the current value
  // the right value is greater then current value
  // we can leverage this features to find the target
  
  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;
  
  let col = 0;
  let row = rows;
  
  while(col <= cols && row <= rows && col >= 0 && row >= 0) {
      if(target < matrix[row][col]) {
          row--;
      } else if (target > matrix[row][col]) {
          col++;
      } else {
          return true;
      }
  }
  
  return false;
};