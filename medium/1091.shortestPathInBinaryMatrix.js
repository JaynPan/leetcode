// https://leetcode.com/problems/shortest-path-in-binary-matrix/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// * Time Complexity: O(N), N 為 cell 總數
// * 這是由於所有的 cell 最多都只會被 enqueue 一次
// * 在 while loop 裏的 inner loop 是在尋找 neighbors，並且此 neighbors 最多只會有 8個，因此 O(N + 8) => O(N)

//* Space Complexity: O(N)，用於 queue

var shortestPathBinaryMatrix = function(grid) {
  const maxCol = grid.length - 1;
  const maxRow = grid[0].length - 1;

  // 起始或是終點就被擋住啦
  if (grid[0][0] === 1 || grid[maxRow][maxCol] === 1) return -1;

  const queue = [];

  const getNeighbors = (cell) => {
    const [row, col] = cell;
    const neighbors = [];
    const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
  
    for (const direction of directions) {
      const [rowDirection, colDirection] = direction;
  
      const neighborRow = row + rowDirection;
      const neighborCol = col + colDirection;
  
      // * 確認此 row & column 是否在 dimension 中
      if (neighborCol >= 0 &&
          neighborRow >= 0  &&
          neighborCol <= maxCol &&
          neighborRow <= maxRow &&
          grid[neighborRow][neighborCol] === 0 // 檢查是否這個 neighbor 是否已經走過 (!== 0)，或者是一道牆 (1)
      ) {
        neighbors.push([neighborRow, neighborCol]);
      }
    }
  
    return neighbors;
  };

  // [row, col]
  grid[0][0] = 1;
  queue.push([0, 0]);

  while (queue.length > 0) {
    const cell = queue.shift();
    const [row, col] = cell;
    const distance = grid[row][col];

    if(row ===  maxRow && col === maxCol) return distance
    
    const neighbors = getNeighbors(cell);

    neighbors.forEach((neighbor) => {
      // 走過的路線，需要紀錄他離起點的 distance 為多少
      // 並且不可以走回頭路 (若在尋找 neighbors 時，其值不為 0，則略過)
      grid[neighbor[0]][neighbor[1]] = distance + 1;
      queue.push(neighbor);
    })
  }

  return -1;
};

const grid = [[0,1],[1,0]]; // 2
const grid2 = [[0,0,0],[1,1,0],[1,1,0]]; // 4
const grid3 = [[1,0,0],[1,1,0],[1,1,0]] // -1
const grid4 = [[0,0,0],[1,1,1],[1,1,0]] // -1
const grid5 = [[0]] // 1

console.log(shortestPathBinaryMatrix(grid5));