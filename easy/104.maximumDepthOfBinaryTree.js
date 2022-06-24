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

// Type: DFS

// * recursion with helper function
var maxDepth = function(root) {
  if(!root) return 0;
  
  let max = 0;
  
  const helper = (node, level) => {
      if(!node.left && !node.right) {
          max = Math.max(max, level);
          return;
      }
      
      if(node.left) {
          helper(node.left, level + 1);
      }
      
      if(node.right) {
          helper(node.right, level + 1);
      }
  }
  
  helper(root, 1);
  return max;
};

// * optimize recursion
var maxDepth = function(root) {
  if(!root) {
      return 0;
  } else {
      return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
  }
};
