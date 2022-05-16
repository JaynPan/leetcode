// * 大部分的 cell 都會有 8 個 neighbors
// * 在 corner 的 只有 3 個
// * 在 edge 有 5 個

function getNeighbors(row, column, gridLength) {
  const neighbors = [];
  const directions = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

  for (const direction of directions) {
    const [rowDirection, colDirection] = direction;

    const neighborRow = row + rowDirection;
    const neighborCol = column + colDirection;

    // * 確認此 row & column 是否在 dimension 中
    if (neighborCol >= 0 && neighborRow >= 0 && neighborCol <= gridLength - 1 && neighborRow <= gridLength - 1) {
      neighbors.push([neighborRow, neighborCol]);
    }
  }

  return neighbors;
};

console.log(getNeighbors(2, 1, 3));