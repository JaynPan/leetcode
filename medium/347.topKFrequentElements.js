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
  
  // O(K) if k === nums.length
  for(let i = 0; i < k; i++) {
    res[i] = res[i].int;
  }
  
  return res.slice(0, k);
};

// * Max Heap
// using the same hashmap technique to store the number-count pair,
// but instead of generate a sorting array, we can replace it with max heap
// to generate a max heap from hash map is an O(N) operation
// then we pop K times and each pop() is O(logN)
// so we optimize the time from O(N*logN) to O(K*logN)

// * Bucket sort
// Time: O(N)
// Space: O(N)
// a bucket sort approach we create an array treating index as the appear count, values is the integer
// for example: nums: [3,3,2,2,2,1,1,6] and bucket sort array: [[], [6], [3,1], [2]];
// then k most frequent elements, means we iterate bucket sort array backward and push the integer into answer until reach K
var topKFrequent = function(nums, k) {
  const map = {};
  const freq = [];
  
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] in map) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  
  // bucket sort
  for(const [int, count] of Object.entries(map)) {
    if(Array.isArray(freq[count])) {
      freq[count].push(Number(int));  
    } else {
      freq[count] = [Number(int)];
    }
  }
  
  const ans = [];
    
  for(let i = freq.length - 1; i >= 0; i--) {
    if(!freq[i]) continue;
    
    for(let j = 0; j < freq[i].length; j++) {
      ans.push(freq[i][j]);
      if(ans.length === k) return ans;
    }
  }
};