/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// type: DFS, backtracking

// * Time: O(N * 3^L) N: number of cell, L: word length
// initially, there are 4 directions to explore. However, we don't go back to previous cell.
// As a result, only 4 directions will be explored.

// * Space: O(L), recursion will go deep to the last character of word if matched
var exist = function(board, word) {
  const maxRow = board.length;
  const maxCol = board[0].length;

  const dfs = (row, col, suffix) => {
    if(suffix.length === 0) return true
    
    if(row < 0 ||
       col < 0 ||
       row >= maxRow ||
       col >= maxCol || 
       board[row][col] !== suffix[0]) {
      return false;
    }

    // the same cell cannot be used more than once.
    board[row][col] = '#';
    let hasMatch = false;

    console.log(row, col);

    for (const offset of [[1,0], [-1,0], [0,1],[0,-1]]) {
      const [rowOffset, colOffset] = offset;
      hasMatch = dfs(row + rowOffset, col + colOffset, suffix.slice(1));
      if(hasMatch) break;
    }

    console.log(board);

    // once we finished, we should recover to original grid state
    board[row][col] = suffix[0];
    return hasMatch;
  }

  for(let i = 0; i < maxRow; i++) {
    for(let j = 0; j < maxCol; j++) {
        const hasMatch = dfs(i, j, word);

        if(hasMatch) {
          return true;
        }
    }
  }

  return false;
};

console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED')) // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'SEE')) // true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCB')) // false