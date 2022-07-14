/**
 * @param {number} capacity
 */

/** 
 * @param {number} key
 * @return {number}
 */

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

// * Doubly LinkedList & Hash Map

// Put: O(1)
// Get: O(1)
var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = new Map();
  
  // left => LRU, right => MRU
  this.left = new Node(0, 0);
  this.right = new Node(0, 0);
  
  // linked each other
  this.left.next = this.right;
  this.right.prev = this.left;
};

// remove from the list
LRUCache.prototype.remove = function(node) {
  let prev = node.prev;
  let next = node.next;
  prev.next = prev.next.next;
  next.prev = next.prev.prev;
}

// insert from the right (MRU)
LRUCache.prototype.insert = function(node) {
  let mru = this.right;
  let nodeBeforeInsert = mru.prev;
  
  node.prev = nodeBeforeInsert;
  node.next = mru;

  nodeBeforeInsert.next = node;
  mru.prev = node;
}

LRUCache.prototype.get = function(key) {
  if(this.cache.has(key)) {
    const targetNode = this.cache.get(key);

    // move the node to MRU
    this.remove(targetNode);
    this.insert(targetNode);

    return targetNode.val;
  }
  
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.cache.has(key)) {
    const targetNode = this.cache.get(key);

    targetNode.val = value;

    this.remove(targetNode);
    this.insert(targetNode);
  } else {
    const newNode = new Node(key, value);

    this.insert(newNode);
    this.cache.set(key, newNode);
  }

  // check whether exceed the capacity
  // assume map has a variable to store the size of the cache, which cause O(1) to lookup
  if(this.cache.size > this.capacity) {
    let lru = this.left.next;
    
    this.remove(lru);
    this.cache.delete(lru.key);
  }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */