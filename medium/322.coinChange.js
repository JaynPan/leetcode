// find minimum coin use for specific amount
// for example, amount 11 -> 5 + 5 + 1 -> 3

// ! Time limit exceeded
// uses backtracking technique to generate all combinations 

// Time: O(D^A) (worst case) (A: amount, D: numbers of denomination)
// Space: O(A) (if the coin allow to use denomination one, making the depth of recursion tree levels "amount")
var coinChangeR = function(coins, amount) {
  const minCoinUse = (remain) => {
    if(remain === 0) return 0;
    if(remain < 0) return -1;

    let minCount = Number.POSITIVE_INFINITY;

    for(const coin of coins) {
      const count = minCoinUse(remain - coin);
      if (count === -1) continue;
      minCount = Math.min(minCount, count + 1);
    }

    return minCount === Number.POSITIVE_INFINITY ? -1 : minCount;
  }

  return minCoinUse(amount);
};

// * Accepted
// Time: O(A*D)
// Space: O(A) // at most A of subproblem, same as Recursion approach
var coinChangeMemoizedRecursive = function(coins, amount) {
  function memoized() {
    const cache = {}; // store the results of subproblem

    return function helper (remain) {
      if(cache[remain]) return cache[remain];
      if(remain === 0) return 0;
      if(remain < 0) return -1;
  
      let minCount = Number.POSITIVE_INFINITY;
  
      for(const coin of coins) {
        const count = helper(remain - coin);
        if (count === -1) continue;
        minCount = Math.min(minCount, count + 1);
      }
  
      const result = minCount === Number.POSITIVE_INFINITY ? -1 : minCount;

      cache[remain] = result;
      return cache[remain];
    }
  }

  const minCoinUse = memoized();
  return minCoinUse(amount);
};


// * DP bottom-up fashion
// Time: O(A*D)
// Space: O(A)
var coinChange = function(coins, amount) {
  // dp value placeholder: use Number.POSITIVE_INFINITY may cause overflow,
  // use amount + 1 instead since the most count will not greater than amount itself

  // key: amount
  // value: min count to make up the  amount
  const dp = Array(amount + 1).fill(amount + 1);
  
  // base case
  dp[0] = 0;
  
  for(let i = 1; i <= amount; i +=1) {
    for(const coin of coins) {
      if(i - coin < 0) continue;
      // induction rule
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  };

  return dp[amount] === amount + 1 ? -1 : dp[amount]; 
};


console.log(coinChange([1,2, 5], 50));