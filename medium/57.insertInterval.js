/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// * Intervals
// Time: O(N)
// Space: O(N)
var insert = function(intervals, newInterval) {
  let result = [];
  

  for (let i = 0; i < intervals.length; i++) {
    if (newInterval[1] < intervals[i][0]) {
      result.push(newInterval);
      result.push(...intervals.slice(i, intervals.length));
      return result;
    } else if (newInterval[0] > intervals[i][1]) {
      result.push(intervals[i]);
    } else {
      newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    }
  }
  
  result.push(newInterval);
  return result;
};