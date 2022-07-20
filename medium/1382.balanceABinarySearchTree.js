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
 * @return {TreeNode}
 */

// * BST
// using dfs in order approach iterate through tree node and store value into an array
// then use divide and conquer method to generate balanced tree

// Time: O(2N)
// Space: O(N)
var balanceBST = function(root) {
  const sorted = [];
  
  const dfsInOrder = (node) => {
    if(node.left) dfsInOrder(node.left);
    sorted.push(node.val);
    if(node.right) dfsInOrder(node.right);
  }
  
  dfsInOrder(root);
  
  const helper = (left, right) => {
    if(left > right) return null;
    if(left === right) return new TreeNode(sorted[left], null, null);

    const middle = Math.floor((left + right) / 2);
    const newNode = new TreeNode(sorted[middle], null, null);
    
    newNode.left = helper(left, middle - 1);
    newNode.right = helper(middle + 1, right);
    return newNode;
  }
  
  return helper(0, sorted.length - 1);
};