/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */

// * Amazon online assessment, HashMap

// Time: O(N + MLog(M)) N = arr1.length  M = arr2.length
// Space: O(N)
var relativeSortArray = function(arr1, arr2) {
  // iterate through arr2 item and store each value as hash map key
  // the the value will be the index

  // we can use that index as the sorted order when iterate through arr1
  const map = {}
  
  for(let i = 0; i < arr2.length; i++) {
    map[arr2[i]] = i;
  }
  
  return arr1.sort((a, b) => {
    const typeofA = typeof map[a];
    const typeofB = typeof map[b];
    
    if(typeofA === 'number' && typeofB === 'number') {
      return map[a] - map[b];
    }
    
    if(typeofA === 'undefined' && typeofB === 'number') {
      return 1;
    }
    
    if(typeofA === 'number' && typeofB === 'undefined') {
      return -1;
    }
    
    return a - b;
  })
};