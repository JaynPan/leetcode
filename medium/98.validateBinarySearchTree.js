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
var isValidBST = function(root) {    
  const validate = (node, lowerLimit, upperLimit) => {
      if(!node) return true;
      if(node.val <= lowerLimit || node.val >= upperLimit) return false;

      return validate(node.left, lowerLimit, node.val) && validate(node.right, node.val, upperLimit);
  }
  
  return validate(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};