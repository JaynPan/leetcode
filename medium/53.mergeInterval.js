// 56. Merge Intervals
var merge = function (intervals) {
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  const merged = []; // assume it's a linked list

  for (let i = 0; i < sorted.length; i += 1) {
    const mergedLastItem = merged[merged.length -1];

    if(merged.length === 0 || mergedLastItem[1] < sorted[i][0]) {
      merged.push(sorted[i]);
    } else {
      mergedLastItem[1] = Math.max(mergedLastItem[1], sorted[i][1]);
    }
  }

  return merged;
};

// time: O(n*log n)
// space: O(n)

// * In terms of time complexity, sorted may be different from input, but most cases are O(n * log n)
// FYI: https://stackoverflow.com/questions/57763205/what-is-array-prototype-sort-time-complexity

const input1 = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18]
];

const input2 = [
  [1, 4],
  [0, 4]
];

const input3 = [
  [1, 4],
  [0, 1]
];

console.log(merge(input1));
console.log(merge(input2));
console.log(merge(input3));
