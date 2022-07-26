/**
 * @param {number[]} height
 * @return {number}
 */

// * Two pointer
// Time: O(N)
// Space: O(1)
var trap = function(height) {
  let leftMax = 0;
  let rightMax = 0;
  let amount = 0;
  let left = 0;
  let right = height.length - 1;
  
  while(left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    
    leftMax = Math.max(leftMax, leftHeight);
    rightMax = Math.max(rightMax, rightHeight);
    
    if(leftMax <= rightMax) {
      const trappedRain = Math.min(leftMax, rightMax) - leftHeight;
      amount += trappedRain > 0 ? trappedRain : 0;
      left++;
    } else {
      const trappedRain = Math.min(leftMax, rightMax) - rightHeight;
      amount += trappedRain > 0 ? trappedRain : 0;
      right--;
    }
  }
  
  return amount;
};

// * Array
// Time: O(3N)
// Space: O(2N)
var trap = function(height) {
  const leftMax = [0];
  const rightMax = [];
  let amount = 0;
  
  rightMax[height.length - 1] = 0;
  
  for(let i = 1; i < height.length; i++) {
    leftMax.push(Math.max(leftMax[i - 1], height[i - 1]));
  }
  
  for(let i = height.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }
  
  for(let i = 0; i < height.length; i++) {
    const trappedRain = Math.min(rightMax[i], leftMax[i]) - height[i];
    
    if(trappedRain > 0) {
      amount += trappedRain;
    }
  }
  
  return amount;
};
