let countDP = 0;
let count = 0;

// 0 1 1 2 3 5 8 13 21 34
// * 透過 memoized，可以大幅度降低時間複雜度

// time complexity: O(2^n) (2 to the power of n)
// specific O(1.618^n)
function regularFibonacci(n) {
  if(n < 2) return n;
  count += 1;
  return regularFibonacci(n - 1) + regularFibonacci(n - 2);
}

// time complexity O(N - 1) 
function memoizedFibonacci() {
  const cache = {};

  return function fibonacci(n) {
    if(n in cache) return cache[n];
    if (n < 2) return n;
    
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    countDP+=1;
    return cache[n];
  }
}

const fibonacci = memoizedFibonacci();
console.log(fibonacci(12));
console.log(regularFibonacci(12));
console.log('memoized with', countDP, 'count');
console.log('without memoized', count, 'count')