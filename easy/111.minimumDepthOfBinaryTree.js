/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// * DFS Approach
// Time: O(N), each node is visited

// Space: O(N) 
// in the worst case if the tree is unbalanced (each node has only one child). Then the recursion call occurs N times.
// if it is a balanced tree, then O(logN)
var minDepth = function(root) {
  if(!root) return 0;
  
  let minDepth = Number.POSITIVE_INFINITY;
  
  const helper = (node, depth) => {
      if(!node.left && !node.right) {
          minDepth = Math.min(minDepth, depth);
      }
      
      if(node.left) {
          helper(node.left, depth + 1);
      }
      
      if(node.right) {
          helper(node.right, depth + 1);
      }
  }
  
  helper(root, 1);
  return minDepth;
};

// * BFS Approach
// In DFS, we need to traverse each of the node to get the result, using BFS can speed up the runtime.
// Since we traverse from the top level to the bottom level, which means the first leaf we reach corresponds to the minimum depth 

// Time: O(N) in the worst case
// Space: O(N)
var minDepth = function(root) {
  if(!root) return 0
  
  let queue = [];
  let level = 1;
  
  queue.push(root);
  
  while(queue.length > 0) {
      let tempQueue = [];
      
      while(queue.length > 0) {
          const currentNode = queue.shift();
          
          // it is a leaf
          if(!currentNode.left && !currentNode.right) {
              return level;
          }
          
          if(currentNode.left) {
              tempQueue.push(currentNode.left);
          }
      
          if(currentNode.right) {
              tempQueue.push(currentNode.right);
          }
      }
      
      level++;
      queue = tempQueue;
  }
  
  return level;
};