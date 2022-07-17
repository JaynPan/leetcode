/**
 * @param {number[][]} intervals
 * @return {number}
 */

// * Interval Greedy

// Time: O(NlogN)
// Space: O(1)
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let removeCount = 0;
  let endVal = intervals[0][1]; 
  
  for(let i = 1; i < intervals.length; i++) {
    // overlap
    if(endVal > intervals[i][0]) {
      removeCount++;
      endVal = Math.min(endVal, intervals[i][1]);
      continue;
    }
    
    endVal = intervals[i][1];
  }
  
  return removeCount;
};