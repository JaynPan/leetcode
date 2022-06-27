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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// * recursion with BFS
var isSubtree = function(root, subRoot) {
  //refer to 100 implementation.
  const isIdentical = (s, t) => {
      if(!s && !t) return true;
      if(!s || !t) return false;
      
      return s.val === t.val && isIdentical(s.left ,t.left) && isIdentical(s.right, t.right);
  }
  
  const queue = [];
  queue.push(root);

  while(queue.length > 0) {
      const node = queue.shift();
      
      const hasSubtree = isIdentical(node, subRoot);
      
      if(hasSubtree) return true;
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
  }
  
  return false;
};

// * optimized first approach
var isSubtree = function(root, subRoot) {
  const isIdentical = (s, t) => {
      if(!s && !t) return true;
      if(!s || !t) return false;
      
      return s.val === t.val && isIdentical(s.left ,t.left) && isIdentical(s.right, t.right);
  }
  
  if(!root) return false;
  if(isIdentical(root, subRoot)) return true;
  return isSubtree(root?.left, subRoot) || isSubtree(root?.right, subRoot);
};