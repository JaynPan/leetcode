/**
 * @param {number[]} arr
 * @return {number}
 */

// Type: Binary Search

// O(N)
var peakIndexInMountainArrayIterative = function(arr) {
  let i = 0;
  
  while(arr[i] < arr[i + 1]) {
      i += 1;
  }
  
  return i;
};

// O(logN)
//  解題思路： 根據 arr[i] < arr[i + 1] 的規則使用 divide and conquer，最終 left === right 而跳出 while loop
var peakIndexInMountainArray = function(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  while(left < right) {
      const middleIdx = Math.floor((left + right) / 2);
      
      if(arr[middleIdx] < arr[middleIdx + 1]) {
          left = middleIdx + 1    
      } else { // means current right index is the biggest
          right = middleIdx;
      }
  }
  
  return left;
}