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
 * @return {boolean}
 */

// * DFS Recursion
// Time: O(N)
// Space: O(N), recursion call stack
var isBalanced = function(root) {
  if(!root) return true;
  
  let isBalanced = true;
  
  const depth = (node) => {
      if(!node) return 0;
      
      const depthL = depth(node.left);
      const depthR = depth(node.right);
      
      if (Math.abs(depthL - depthR) > 1) {
          isBalanced = false;
          return;
      };
      
      return [Math.abs(depthL - depthR) <= 1, 1 + Math.max(depthL, depthR)];
  }
  
  depth(root);
  return isBalanced;
};

// * DFS Optimized
var isBalanced = function(root) {
  const dfs = (node) => {
      if(!node) return [true, 0]; // [0]: isBalanced [1]: node max height
      
      const left = dfs(node.left);
      const right = dfs(node.right);
      const isBalanced = left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1;
      
      return [isBalanced, 1 + Math.max(left[1], right[1])];
  }
  
  return dfs(root)[0];
};