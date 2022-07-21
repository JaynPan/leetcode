/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

//* Array, Hash, Sort
// Time: (N * LogN)
// Space: O(N)
var topKFrequent = function(nums, k) {
  const map = {};
  const res = [];
  
  // O(N)
  for(const num of nums) {
    if(num in map) {
      map[num] += 1;
    } else {
      map[num] = 0;
    }
  }
  
  // O(N) in worst case
  for(const [int, count] of Object.entries(map)) {
    res.push({ int ,count });
  }
  
  // O(N*LogN)
  res.sort((a, b) => b.count - a.count)
  
  // O(N) if k === nums.length
  for(let i = 0; i < k; i++) {
    res[i] = res[i].int;
  }
  
  return res.slice(0, k);
};