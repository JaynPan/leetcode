/**
 * @param {number[]} nums
 * @return {number}
 */

// 解題思路：
// 由於不能夠連續偷鄰近兩間房子，因此
// 假設從第一間房子開始偷，所以下一次只能偷第三間的房子
// 要找出獲益最大化，可以推出以下公式
// Math.max(robFrom(i + 1), robFrom(i + 2) + nums[i]);
// 比較從現在這間開始偷跟從下一間房子開始偷的哪一個比較好
// 其中 robFrom(i) 透過遞迴不斷倆倆比較推算出最大效益為何

// 最後透過 memoized 的方式減少重複計算
// Time Complexity -> O(N)
// Space Complexity -> O(N)

var rob = function(nums) {  
  function memoizedRob() {
    const cache = {};

    return function robFrom(i) {
      if(i >= nums.length) return 0;
      if(cache[i] !== undefined) return cache[i];

      const total = Math.max(robFrom(i + 1), robFrom(i + 2) + nums[i]);

      cache[i] = total
      return total;
    }
  }

  const memoized = memoizedRob();
  return memoized(0);
};

const nums1 = [1,2,3,1]; // 4
const nums2 = [2,7,9,3,1]; // 12
const nums3 = [1,2] // 2
const nums4 = [2,1,1,2] // 4
console.log(rob(nums4));