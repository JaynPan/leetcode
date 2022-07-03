/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

// * DP

// Time: O(38*N) n: days, 38: 1-day + 7-day + 30-day pass = 38
// Space: O(N)
var mincostTickets = function(days, costs) {
  const passes = [1, 7, 30];
  const dp = {};
  
  // the min cost the input to the final day
  const helper = (i) => {
      // base case
      if(i >= days.length) return 0;
      if(dp[i]) return dp[i];
      
      let minCost = Number.POSITIVE_INFINITY;
      
      for(let j = 0; j < costs.length; j++) {
          const cost = costs[j];
          const dayPass = passes[j];
          let k = i;
          
          while(k < days.length && days[k] < days[i] + dayPass) {
              k++;
          }
          
          minCost = Math.min(minCost, helper(k) + cost);
      }
      
      dp[i] = minCost;
      return dp[i];
  }
  
  return helper(0);
};