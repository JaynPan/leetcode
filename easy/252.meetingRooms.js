/**
 * @param {number[][]} intervals
 * @return {boolean}
 */


// Time: O(N * logN)
// Space: O(1)
var canAttendMeetings = function(intervals) {
  // sort the array by the start time
  const sorted = intervals.sort((a, b) => a[0] - b[0]);
  
  // compare first interval end time and next interval start time
  // if the first interval end time is greater then next interval start time
  // means overlap
  for(let i = 0; i < sorted.length - 1; i++) {
      if(sorted[i][1] > sorted[i + 1][0]) {
          return false;
      }
  }
  
  return true;
};

console.log(canAttendMeetings([[7,10],[2,4]])) // true
console.log(canAttendMeetings[[0,30],[5,10],[15,20]]) // false