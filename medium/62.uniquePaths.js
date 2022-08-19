/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// * DP Accepted
// Time: O(M*N)
// Space: O(M*N)
var uniquePaths = function(m, n) {
  const firstRow = Array(n).fill(1);
  const dp = [firstRow];
  
  for(let row = 1; row < m; row++) {
    dp.push([1]);
  }
  
  for(let row = 1; row < m; row++) {
    for(let col = 1; col < n; col++) {
      dp[row][col] = dp[row - 1][col] + dp[row][col -1];
    }
  }
  
  return dp[m -1 ][n -1];
};

// ! DFS time limit exceeded
// the dfs may encounter repeated works, we can cache[m][m] = paths to reduce time complexity
var uniquePaths = function(m, n) {
  const dfs = (row, col) => {
    if(row === m && col === n) return 1;
    if(row > m || col > n) return 0;
    
    let paths = 0;

    paths += dfs(row + 1, col);
    paths += dfs(row, col + 1);
    return paths;
  }
  
  return dfs(1, 1);
};
