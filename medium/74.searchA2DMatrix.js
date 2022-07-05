/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// Time: O(log N + log M) => O(log(N*M))
// binary search the target located in which row, then search the col
// Space: O(1)
var searchMatrix = function(matrix, target) { 
  const bs = (array, t) => {
      let left = 0;
      let right = array.length - 1;
      
      while(left <= right) {
          const middle = Math.floor((left + right) / 2);
                                  
          if(array[middle] < t) {
              left = middle + 1;
          } else if (array[middle] > t) {
              right = middle - 1;
          } else {
              return middle;                
          }
      }
      
      return -1;
  }
  
  const rows = matrix.length - 1;
  const cols = matrix[0].length - 1;
  
  let top = 0;
  let bottom = rows;
  
  while(top <= bottom) {
      const rMiddle = Math.floor((top + bottom) / 2);

      if(matrix[rMiddle][0] > target) {
          bottom -= 1;
      } else if (matrix[rMiddle][cols] < target) {
          top += 1;
      } else {
        // we find the match row, now start finding col index
        return bs(matrix[rMiddle], target) !== -1;
      }
  }
  
  return false;
};