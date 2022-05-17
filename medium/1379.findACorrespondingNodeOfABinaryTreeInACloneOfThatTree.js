/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
  const originalQueue = [original];
  const clonedQueue = [cloned];
  
  while(originalQueue.length > 0) {
      const originalNode = originalQueue.shift();
      const clonedNode = clonedQueue.shift();

      if (originalNode.val === target.val) {
          return clonedNode;
      }
      
      if (originalNode.left) {
          originalQueue.push(originalNode.left);
          clonedQueue.push(clonedNode.left);
      }
      
      if(originalNode.right) {
          originalQueue.push(originalNode.right);
          clonedQueue.push(clonedNode.right);
      }
  }
};