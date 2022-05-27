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