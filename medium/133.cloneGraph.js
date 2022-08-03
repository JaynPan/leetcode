/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// * Graph: Similar to .138 
// Time: O(N)
// Space: O(N), hash map store each node reference
var cloneGraph = function(node) {
  if(!node) return undefined;
  
  const map = new Map();
  
  const helper = (currentNode) => {
    if(map.has(currentNode.val)) return map.get(currentNode.val);
    
    const _node = new Node(currentNode.val);
    
    map.set(currentNode.val, _node);
    
    if (Array.isArray(currentNode.neighbors)) {
      for(const neighbor of currentNode.neighbors) {
        _node.neighbors.push(helper(neighbor));
      }
    }
    
    return _node;
  }
  
  return helper(node);
};