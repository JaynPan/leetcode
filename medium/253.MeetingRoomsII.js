/**
 * @param {number[][]} intervals
 * @return {number}
 */

// * Intervals
// Time: O(N*LogN)
// Space: O(N), use extra space to store startTimes and endTimes
var minMeetingRooms = function(intervals) {
  const startTimes = [];
  const endTimes = [];
  
  for(let i = 0; i < intervals.length; i++) {
    startTimes.push(intervals[i][0]);
    endTimes.push(intervals[i][1])
  }
  
  startTimes.sort((a ,b) => a - b);
  endTimes.sort((a, b) => a - b);
  
  let count = 0;
  let start = 0;
  let end = 0;
  let maxCount = 0;
  
  while(start < startTimes.length) {
    if(endTimes[end] <= startTimes[start]) {
      count--;
      end++;
    } else {
      count++;
      maxCount = Math.max(maxCount, count);
      start++;
    }
  }
  
  return maxCount;
};