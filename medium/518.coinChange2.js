/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

// * DP memo
// Time: O(N*M)
// Space: O(N*M)
var change = function(amount, coins) {
  const memo = new Map();
  
  const helper = (sum, coinIdx) => {
    if(sum === amount) return 1;
    if(sum > amount) return 0;
    
    const key = `${sum}#${coinIdx}`;
    if(memo.has(key)) return memo.get(key);

    let ways = 0;
    
    for (let i = coinIdx; i < coins.length; i++) {
      ways += helper(sum + coins[i], i);
    }
    
    memo.set(key, ways);
    return ways;
  }
  
  return helper(0, 0);
};

// ! DP bottom up (undo)
