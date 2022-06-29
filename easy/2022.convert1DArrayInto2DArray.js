/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */

// Type: Arrays

// Time: O(N), n: original.length
// Space: O(N * M), array with m rows and n columns
var construct2DArray = function(original, m, n) {
  if(m*n != original.length) return [];
  
  const arrayIn2D = [];
  let i = 0;
  let currentRow = 0;
  
  
  while(i < original.length) {
      const row = [];
      
      while(i >= currentRow * n && i <= ((currentRow + 1) * n) - 1) {
          row.push(original[i]);
          i++;    
      }
      
      currentRow++;
      arrayIn2D.push(row);
  }
  
  return arrayIn2D;
};