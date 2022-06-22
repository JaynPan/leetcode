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