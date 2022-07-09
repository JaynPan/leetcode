/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */

// * Hash Map
// Time: O(N)
// Space: O(1) hash map contains at most 10 keys
var getHint = function(secret, guess) {
  const map = {};
  let bulls = 0;
  let cows = 0;
  
  for(let i = 0; i < secret.length; i++) {
      const count = map[secret[i]];
      map[secret[i]] = count ? count + 1 : 1;
  }
    
  for(let i = 0; i < guess.length; i++) {
      const count = map[guess[i]];

      if(typeof count === 'number') {
          if(secret[i] === guess[i]) {
              bulls++;
            
              if(count <= 0) {
                cows--;
              }
          } else {
            if(count > 0) {
              cows++; 
            }
          }
          
          map[guess[i]] = count - 1;
      }
  }
  
  return `${bulls}A${cows}B`;
};