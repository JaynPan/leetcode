/**
 * @param {number[]} height
 * @return {number}
 */

// * Array
// Time: O(N)
// Space: O(N)
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
