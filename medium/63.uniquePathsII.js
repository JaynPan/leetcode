/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */


// * 機器人只能 "往下" "往右" 走 (撞到 obstacle 後，若不能往下則此路徑就等於失效了）
// 透過 bottom-up fashion，每一格步驟數為 左邊格子的步驟數 + 上方格子的步驟數
// 只要將 first row & first col 的步驟數計算出來後，就可以依照規則算出最後一格的步驟數了

// Time Complexity: O(M * N) (the size of the grid M*N)
// Space Complexity: O(1)
var uniquePathsWithObstacles = function(obstacleGrid) {
  const maxCol = obstacleGrid[0].length;
  const maxRow = obstacleGrid.length;
  
  if(obstacleGrid[0][0] === 1) return 0;
  
  obstacleGrid[0][0] = 1;
  
  // 改變第一行 col
  for(let i = 1; i < maxRow; i += 1) {
    // 原本是 1 表示此為障礙，此路不通
    obstacleGrid[i][0] = obstacleGrid[i][0] === 1 ? 0 : obstacleGrid[i -1][0];
  }
  
  // 改變第一行 row
  for(let j = 1; j < maxCol; j += 1) {
    obstacleGrid[0][j] = obstacleGrid[0][j] === 1 ? 0 : obstacleGrid[0][j - 1];
  }

  for(let i = 1; i < maxRow; i += 1) {
    for(let j = 1; j < maxCol; j += 1) {
      if(obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0;
      } else {
        obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
      }
    }
  }

  return obstacleGrid[maxRow - 1][maxCol - 1];
};

// !原本使用 BFS 的方式，但 Time Limit Exceeded
var uniquePathsWithObstaclesBFS = function(obstacleGrid) {
  const maxCol = obstacleGrid[0].length - 1;
  const maxRow = obstacleGrid.length - 1;
  
  if(obstacleGrid[0][0] === 1 || obstacleGrid[maxRow][maxCol] === 1) return 0;
  
  const findNeighbors = (row, col) => {
      const neighbors = [];
      const directions = [[0, 1], [1, 0]];
      
      for(const direction of directions) {
          const neighborCol = direction[1] + col;
          const neighborRow = direction[0] + row;
          
          if( neighborCol >= 0 &&
              neighborRow >= 0 &&
              neighborCol <= maxCol &&
              neighborRow <= maxRow
            ) {
              if(obstacleGrid[neighborRow][neighborCol] === 0) {
                  neighbors.push([neighborRow, neighborCol]);    
              }
          }
      }
      
      return neighbors;
  }
  
  let uniquePathCount = 0;
  const queue = [];
  obstacleGrid[0][0] = 1; // set path distance
  queue.push([0, 0]);
  
  while(queue.length > 0 ) {
      const cell = queue.shift();
      const [row, col] = cell;
      
      if(col === maxCol && row === maxRow) {
          uniquePathCount += 1;
      } else {
          const neighbors = findNeighbors(row, col);
      
          for(const neighbor of neighbors) {
              queue.push(neighbor);
          }
      }
  }
  
  return uniquePathCount;
};

const input = [[0,0,0,0],[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0]];


console.log(uniquePathsWithObstacles(input))