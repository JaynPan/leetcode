/**
 * @param {number[]} nums
 */

// Type: DP, bottom-up

 var NumArray = function(nums) {
  this.nums = nums;
  this.cache = {0: 0};
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
  if(this.cache[right + 1] === undefined) {
      for (let i = 0; i <= this.nums.length; i++) {
          this.cache[i + 1] = this.nums[i] + this.cache[i];
      }
  }
  
  return this.cache[right + 1] - this.cache[left];
};

/** 
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/