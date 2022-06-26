/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// Type; Binary Search Tree, LCA

// * iterative approach
// the lowest common ancestor would be the last ancestor node common to both of p & q
// As a result, we can assume p & q node would locate at the ancestor right and left side respectively
// Then we leverage BST feature, left subtree of node value should lesser than right subtree of node value
// In other words, if the q & p are still lesser or greater than current node, we are not find the lowest ancestor yet.
var lowestCommonAncestor = function(root, p, q) {
  let node = root;
  
  while(node) {
      // both target in the right tree
      if(node.val < p.val && node.val < q.val) { 
          node = node.right;
      } else if (node.val > p.val && node.val > q.val) {
          node = node.left;
      } else {
        return node;
      }
  }
};

// * recursive approach
var lowestCommonAncestor = function(root, p, q) {
  if(root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }

  return root;
};