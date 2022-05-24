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
 * @return {TreeNode}
 */

// * For a balanced BST the time complexity is O(logN), and Space is O(1)
var inorderSuccessor = function(root, p) {
  let successor = null;
    
  while(root !== null) {
      if(root.val <= p.val) {
          root = root.right;
      } else {
          successor = root;
          root = root.left;
      }
  }
  
  return successor;
};


// Time: O(N), N is node amount
// Space: O(S), S is the tree heigh
// ! Using DFS in order algorithm doesn't leverage the BST properties
var inorderSuccessorDFS = function(root, p) {
  const list = [];
  let targetIdx = null;

  const traverseInOrder = (node) => {
    if(typeof targetIdx === 'number' && list.length - 1 === targetIdx + 1) return
      
    if(node.left !== null) {
      traverseInOrder(node.left);
    }

    list.push(node);

    if(node.val === p.val) {
      targetIdx = list.length - 1;
    };
      
    if(node.right !== null) {
      traverseInOrder(node.right);
    }
  }

  traverseInOrder(root);
  
  const successorIdx = targetIdx + 1;
  return targetIdx !== null && list[successorIdx] !== undefined ? list[successorIdx] : null;
};