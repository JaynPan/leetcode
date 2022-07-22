/**
 * @param {character[][]} board
 * @return {boolean}
 */

// * Array, Hash map
// Time: O(81 * 3)
// Space: O(9)
// the hardest part is to figure out the way to valid sub-box
var isValidSudoku = function(board) {
  const isValidSubBox = (row, col) => {
    let right = 0;
    let left = 0;
    const set = new Set();
    
    while(right < 3) {
      left = 0;

      while(left < 3) {
        const cellVal = board[row + right][col + left];
        if(set.has(cellVal)) return false;
        if(cellVal !== ".") set.add(cellVal);
        left++;
      }

      right++;
    }
    
    return true;
  }
  
  // check all sub-boxes
  for(let i = 0; i < 9; i+=3) {
    for(let j = 0; j < 9; j+=3) {
      if(!isValidSubBox(i, j)) return false;
    }
  }
  
  // check col
  for(let i = 0; i < 9; i+=1) {
    const set = new Set();
    
    for(let j = 0; j < 9; j+=1) {
      const cellVal = board[i][j];
      if(set.has(cellVal)) return false;
      if(cellVal !== ".") set.add(cellVal);
    }
  }
  
  // check row
  for(let i = 0; i < 9; i+=1) {
    const set = new Set();
    
    for(let j = 0; j < 9; j+=1) {
      const cellVal = board[j][i];
      if(set.has(cellVal)) return false;
      if(cellVal !== ".") set.add(cellVal);
    }
  }
  
  return true;
}