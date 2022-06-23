/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// Type: BFS, DFS

// *DFS
var isSameTree = function(p, q) {
  if(!p && !q) return true;
  if(!p || !q) return false;
  if(p.val !== q.val) return false;
  
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// *BFS
var isSameTree = function(p, q) {
  if(!p && !q) return true;
  
  const queue = [];
  
  queue.push({ pNode: p, qNode: q });
  
  while(queue.length > 0) {
      const { pNode, qNode } = queue.shift();
      
      if(!pNode || !qNode) return false;
      if(pNode.val !== qNode.val) return false;
      
      if(pNode.left || qNode.left) {
          queue.push({ pNode: pNode.left, qNode: qNode.left })
      } 
      
      if(pNode.right || qNode.right) {
          queue.push({ pNode: pNode.right, qNode: qNode.right })
      } 
  }
  
  return true;
};