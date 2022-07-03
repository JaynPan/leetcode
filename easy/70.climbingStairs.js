/**
 * @param {number} n
 * @return {number}
 */


// n(1) -> 1
// n(2) -> 2
// n(3) -> 3
// n(4) -> 5
// n(5) -> 8
// n(6) -> 13

// !Time Limit Exceeded
var climbStairsRecursive = function(n) {
    if(n <= 3) return n;
    return climbStairsRecursive(n - 2) + climbStairsRecursive(n - 1);
};

// Time: O(N), 
var climbStairsMemo = function(n) {
  const cache = {};
  
  const helper = (i) => {
      if(cache[i]) return cache[i];
      if(i === n) return 1;
      if(i > n) return 0;
      
      
      const result = helper(i + 1) + helper(i + 2);
      cache[i] = result;
      return cache[i];
  }
  
  return helper(0)
}

var climbStairs = function(n) {
  const waysForEachStairCases = [1,2,3];

  // array is zero-based, thus n -1
  for (let i = 3; i <= n - 1; i +=1) {
    waysForEachStairCases.push(waysForEachStairCases[i - 2] + waysForEachStairCases[i - 1]);
  }

  return waysForEachStairCases[n - 1];
}

console.log(climbStairs(1)); // 1
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13