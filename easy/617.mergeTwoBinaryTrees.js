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

// Type: DFS, BFS

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

// *BFS
var mergeTrees = function(root1, root2) {
  if(!root1) return root2;
  
  const queue = [];
  queue.push({ node1: root1, node2: root2 });
  
  while(queue.length > 0) {
      let { node1, node2 } = queue.shift();
      
      // if node2 not exist, means we can remain the node1 structure
      if(!node2) continue;
      
      // both node exist, sum them up
      node1.val += node2.val;

      // when the left node of first tree not exist, replace it to the second tree left node
      if (!node1.left) {
          node1.left = node2.left;
      } else {
          // the left node of first tree exist, then push to queue
          queue.push({ node1: node1.left, node2: node2.left })
      }
      
      if (!node1.right) {
          node1.right = node2.right;
      } else {
          queue.push({ node1: node1.right, node2: node2.right })
      }
  }
  
  return root1;
};