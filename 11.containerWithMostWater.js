/**
 * @param {number[]} height
 * @return {number}
 */

// brute-force
 var maxAreaBruteForce = function(height) {
    let maxAmount = 0;  

    for(let i = 0; i < height.length; i+=1) {
      const currentItem = height[i];

      for(let j = i + 1; j < height.length; j +=1) {
        const width = j - i;
        const amount = width * Math.min(currentItem, height[j]);

        maxAmount = Math.max(maxAmount, amount);
      }
    }

    return maxAmount;
};

// two point approach
// 解題思緒：寬度與高度這兩個變數會影響 maxArea
// 而在寬度減小的情況下能夠增加 area 的方法就是提高原先比較矮的 line height
// 因此，我從最大寬度算出面積後，再比較兩邊高度決定要往哪邊限縮，直到寬度小於 1 為止
var maxAreaTwoPointApproach = function(height) {
  let maxAmount = 0;
  let left = 0;
  let right = height.length - 1;

  while(left < right) {
    const width = right - left;
    const amount = Math.min(height[left], height[right]) * width;

    if(height[left] > height[right]) {
      right -=1;
    } else {
      left +=1;
    }

    maxAmount = Math.max(amount, maxAmount);
  }

  return maxAmount;
}


const height = [1,8,6,2,5,4,8,3,7]; //output 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

const height1 = [1,1]; // output 1

console.log(maxAreaTwoPointApproach(height));
console.log(maxAreaTwoPointApproach(height1));