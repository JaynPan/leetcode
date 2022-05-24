import { BinarySearchTree, traverse } from './binarySearchTree.js'

// DFS space complexity is O(H), H is the BTS height
// BFS space complexity is O(N), N is tree node amount

class Search extends BinarySearchTree {
  constructor(props) {
    super(props)
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    const list = [];
    const queue = [];

    queue.push(currentNode);
    
    while(queue.length > 0) {
      currentNode = queue.shift();
      list.push(currentNode.value);
      
      if(currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      
      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }

    return list;
  }

  breadthFistSearchRecursive() {
    const helper = (queue, list) => {
      if(queue.length === 0) {
        return list;
      }

      const currentNode = queue.shift();

      list.push(currentNode.value);
      
      if(currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      
      if(currentNode.right !== null) {
        queue.push(currentNode.right);
      }

      return helper(queue, list);
    }

    return helper([this.root], []);
  }

  dfsInOrder() {
    const list = [];

    const traverseInOrder = (node) => {
      if(node.left !== null) {
        traverseInOrder(node.left);
      }

      list.push(node.value);

      if(node.right !== null) {
        traverseInOrder(node.right);
      }
    }

    traverseInOrder(this.root);
    return list;
  }

  dfsPreOrder() {
    const list = [];
    
    const traversePreOrder = (node) => {
      list.push(node.value);

      if(node.left !== null) {
        traversePreOrder(node.left);
      }

      if(node.right !== null) {
        traversePreOrder(node.right);
      }
    }

    traversePreOrder(this.root);
    return list;
  }

  dfsPostOrder() {
    const list = [];

    const traversePostOrder = (node) => {
      if (node.left) {
        traversePostOrder(node.left)
      }

      if(node.right) {
        traversePostOrder(node.right)
      }

      list.push(node.value);
    }

    traversePostOrder(this.root);
    return list;
  }

  findSuccessor(p) {
    let successor = null;
    let root = this.root;
      
    while(root !== null) {
        if(root.value <= p) {
            root = root.right;
        } else {
            successor = root;
            root = root.left;
        }
    }
    
    return successor;
  };
}

const tree = new Search();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)

//     9
//  4     20
//1  6  15  170

console.log('iterative', tree.breadthFirstSearch());
console.log('recursive', tree.breadthFistSearchRecursive());
console.log('dfsInOrder', tree.dfsInOrder()); // 1 4 6 9 15 20 170
console.log('dfsPreOrder', tree.dfsPreOrder()); // 9 4 1 6 20 15 170
console.log('dfsPostOrder', tree.dfsPostOrder()); // 1 6 4 15 170 20 9
console.log('findSuccessor', tree.findSuccessor(20)); // 170