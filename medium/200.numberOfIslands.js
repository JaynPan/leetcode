/**
 * @param {character[][]} grid
 * @return {number}
 */

// *DFS algorithm
// Time: O(M*N) M = grid row length, N = grid column length
// Space O(M*N) in the worst case, all grid is filled with lands, the recursion goes by M*N deep
var numIslands = function(grid) {
  const maxCol = grid[0].length;
  const maxRow = grid.length;
  let numsOfIslands= 0;
  
  const dfs = (row, col) => {
      if(row < 0 || col < 0 || col >= maxCol || row >= maxRow || grid[row][col] === "0") {
          return;
      }
      
      grid[row][col] = "0";
      dfs(row + 1, col);
      dfs(row - 1, col);
      dfs(row, col + 1);
      dfs(row, col + 1);
  }

  
  for (let i = 0; i < maxRow; i += 1) {
      for (let j = 0; j < maxCol; j += 1) {
          if (grid[i][j] === "1") {
              numsOfIslands += 1;
              dfs(i, j);
          }
      }
  }
  
  return numsOfIslands;
};



const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]

const  grid1 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

const grid2 = [["1","1","1"],["0","1","0"],["1","1","1"]];

console.log(numIslands(grid)); // 1
console.log(numIslands(grid1)); // 3
console.log(numIslands(grid2)); // 1