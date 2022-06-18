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
 * @return {number[]}
 */

// Type: Binary Search, BFS

// * BFS
// Time: O(N)
// Space: O(S) S is the maximum number of nodes in any level of tree
var averageOfLevels = function(root) {
  const result = [];
  let queue = [];

  queue.push(root);
  
  while(queue.length > 0) {
      let sum = 0;
      let count = 0;
      let tempQueue = [];

      while(queue.length > 0) {
          let currentNode = queue.shift();
          sum += currentNode.val;
          count++;
          
          if(currentNode.left) {
              tempQueue.push(currentNode.left)
          }
          
          if(currentNode.right) {
              tempQueue.push(currentNode.right)
          }
      }
      
      queue = tempQueue;
      result.push(sum / count);
  }

  return result;
};