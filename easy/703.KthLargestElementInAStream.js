/**
 * @param {number} k
 * @param {number[]} nums
 */

// * Binary Heap

// time: overall time complexity O(nlogn) 
// space: O(n)
var KthLargest = function(k, nums) {
  this.minHeap = new MinHeap();
  this.k = k;
  
  // O(n)
  for (const num of nums) {
      this.minHeap.insert(num);
  }
  
  // O((n - k) * logn)
  while (this.minHeap.size() > k) {
      this.minHeap.remove();
  }
};

/** 
* @param {number} val
* @return {number}
*/

// length === 4 , k = 3
// [3,5,6]
KthLargest.prototype.add = function(val) {
  // O(logn)
  this.minHeap.insert(val);
  
  if (this.minHeap.size() > this.k) {
      this.minHeap.remove();        
  }

  // O(1)
  return this.minHeap.getMin();
};

class MinHeap {
  constructor() {
    this.values = [];
  }
    
  getMin() {
      return this.values[0];
  }
    
  size() {
      return this.values.length;
  }
      
  insert(element) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent >= current) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }

  remove() {
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild < current) ||
          (swap !== null && rightChild < leftChild)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return max;
  }
}

/** 
* Your KthLargest object will be instantiated and called as such:
* var obj = new KthLargest(k, nums)
* var param_1 = obj.add(val)
*/