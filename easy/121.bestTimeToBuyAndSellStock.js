/**
 * @param {number[]} prices
 * @return {number}
 */

// Type: Greedy algorithm

// The max profit should always buying at the lowest price and selling at highest price
// Thus, while iterate through prices, although we don't know the current price is the lowest or highest price
// but we can compare it with the current min and max price.
var maxProfit = function(prices) {
  let result = 0;
  let min = prices[0];
  
  for(let i = 1; i < prices.length; i +=1) {
      min = Math.min(min, prices[i]);
      result = Math.max(result, prices[i] - min);
  }
  
  return result;
};
