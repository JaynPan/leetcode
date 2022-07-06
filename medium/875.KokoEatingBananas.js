/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// * Binary Search
// Time: O(log(max(piles) * piles.length))
// Space: O(1)
var minEatingSpeed = function(piles, h) {
  let maxPile = 0;
  
  for(const pile of piles) {
      maxPile = Math.max(maxPile, pile);
  }
  
  let left = 0;
  let right = maxPile;
  
  while(left <= right) {
      let k = Math.floor((left + right) / 2);
      let hrToFinish = 0;
      
      for(const pile of piles) {
          // round up to the largest integer
          hrToFinish += Math.ceil(pile / k);
      }
      
      // hrToFinish < h means koko eat too fast, so we should slow it down by reduce eating speed
      // in other word, hrToFinish > h means koko eat too slow, speed up k
      if (hrToFinish <= h) {
          right = k - 1;
      } else {
          left = k + 1;
      }
  }
      
  return left;
};