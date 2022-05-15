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

 var deepestLeavesSum = function(root) {
  const queue = [];
  let sum = 0;
  let deepest = 0;

  queue.push({ node: root, currentDepth: 0 });
  
  while(queue.length > 0) {
    const { node, currentDepth } = queue.shift();

    if (node.left === null && node.right === null) {
        if(currentDepth > deepest) {
            sum = node.val;
            deepest = currentDepth;
        } else if (currentDepth === deepest) {
            sum += node.val;
        }
    }
    
    if (node.left !== null) {
      queue.push({ node: node.left, currentDepth: currentDepth + 1 });
    }
    
    if (node.right !== null) {
      queue.push({ node: node.right, currentDepth: currentDepth + 1 });
    }
  }

  return sum;
};