// Type: Stack

// all operation should be in constant time O(1)
// * The key point is to store min val in each node, so no need to iterate to find min val when node be popped

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.min = val;
  }
}

var MinStack = function() {
  this.peak = null;
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  let newNode = new Node(val);

  if(this.peak !== null && this.peak.min < val) {
    newNode.min = this.peak.min;
  }
  
  const topPointer = this.peak;
  this.peak = newNode;
  newNode.next = topPointer;
  return this;
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  const holdingPointer = this.peak;

  this.peak = this.peak.next;
  return holdingPointer;
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.peak.val;
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.peak.min;
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(val)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/

var minStack = new MinStack()

minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log('min1', minStack.getMin()); // return -3
minStack.pop();
console.log('top1', minStack.top());
console.log('min2', minStack.getMin()); // return -2

console.log(JSON.stringify(minStack.peak))