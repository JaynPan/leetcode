/**
 * @param {number[]} prices
 * @return {number}
 */

// The bottom-up approach (dynamic programming)
var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];
  
  for(let i = 1; i < prices.length; i +=1) {
      min = Math.min(min, prices[i]);
      result = Math.max(result, prices[i] - min);
  }
  
  return result;
};
