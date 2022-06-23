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
 * @param {number} targetSum
 * @return {boolean}
 */

// Type: Binary Tree, DFS

// * DFS
var hasPathSum = function(root, targetSum) {
  const helper = (node, target) => {
      if(!node) return false;
      if(target === node.val && !node.left && !node.right) return true;
      
      return helper(node.left, target - node.val) || helper(node.right, target - node.val);
  }
  
  return helper(root, targetSum);
};