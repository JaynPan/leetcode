/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// type: LinkedList, Recursion

// TODO: Can improve space complexity to O(1)

// Time: O(N), N is number of nodes
// Space: O(N), recursion stack & map to keep track of cloned node
var copyRandomList = function(head) {
  const map = new Map();

  const helper = (node) => {
      if (node === null) return null;
      if (map.has(node)) return map.get(node);
      
      let _node = new Node(node.val, null, null);
      
      map.set(node, _node);

      _node.next = helper(node.next);
      _node.random = helper(node.random);
              
      return _node;
  }

  return helper(head);
};

// * Two passes
// Time: O(N)
// Space: O(N)
var copyRandomList = function(head) {
  let currentNode = head;
  const map = new Map();

  // deep clone each node and store in hash map, without connect the pointer
  while(currentNode) {
    const _node = new Node(currentNode.val, null, null);
    
    map.set(currentNode, _node);
    currentNode = currentNode.next;    
  }
  
  currentNode = head;
  
  // connect the pointer, since all nodes have a copy in map
  while(currentNode) {
    const _node = map.get(currentNode);

    _node.next = map.has(currentNode.next) ? map.get(currentNode.next) : null;
    _node.random = map.has(currentNode.random) ? map.get(currentNode.random) : null;
    currentNode = currentNode.next;    
  }
    
  return map.get(head);
};