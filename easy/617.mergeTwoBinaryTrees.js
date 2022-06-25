/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */

// Type: DFS

// we sum the currentNode val of both tree
// if one of the tree is null, we replace it to the other
// then, recursive the left and right children until all the node are traversed
var mergeTrees = function(root1, root2) {
  if(!root1) return root2;
  if(!root2) return root1;

  root1.val += root2.val;
  root1.left = mergeTrees(root1?.left, root2?.left);
  root1.right = mergeTrees(root1?.right, root2?.right);
  return root1;
};