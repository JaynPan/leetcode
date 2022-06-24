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

var diameterOfBinaryTree = function(root) {
  let diameter = 0;
  
  const longestPathHelper = (node) => {
      if(!node) return 0;
      
      let leftPath = longestPathHelper(node.left);
      let rightPath = longestPathHelper(node.right);
      
      // the current node left branch + right branch could be the longest path in the tree
      diameter = Math.max(diameter, leftPath + rightPath);

      // return the longest one between left and right branches
      // plus one since it connecting to the parent node
      return Math.max(leftPath, rightPath) + 1;
  }
  
  longestPathHelper(root);
  return diameter;
};