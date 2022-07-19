/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// * Brute Force
// Time: O(N^2)
// Space: O(N)
var dailyTemperatures = function(temperatures) {
  const res = [];
  
  for(let i = 0; i < temperatures.length; i++) {
    let counter = 0;
    let hasWarmerTemperature = false;
    
    for (let j = i + 1; j < temperatures.length; j++) {
      counter++;
      
      if(temperatures[i] < temperatures[j]) {
        res.push(counter);
        hasWarmerTemperature = true;
        break;
      }
    }
    
    if(!hasWarmerTemperature) res.push(0);
  }
  
  return res;
};

// * Monotonic Stack
// Time: O(N), technically it is O(2N), since the stack may contains N element, and in the worst case it causes N pops
// Space: O(N)
var dailyTemperatures = function(temperatures) {
  const ans = Array(temperatures.length).fill(0);
  const stack = [];
  
  for(let i = 0; i < temperatures.length; i++) {
    const currentTemperature = temperatures[i];

    while(stack.length) {
      const { temperature, index } = stack[stack.length - 1];
      
      if(temperature >= currentTemperature) break;
      
      stack.pop();  
      ans[index] = i - index;
    }
    
    stack.push({ temperature: currentTemperature, index: i });
  }
  
  return ans;
};