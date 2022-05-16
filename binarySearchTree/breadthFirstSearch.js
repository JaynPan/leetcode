import { BinarySearchTree, traverse } from './binarySearchTree.js'

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

  dfsPreOrder() {}

  dfsPostOrder() {

  }
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
console.log('dfsInOrder', tree.dfsInOrder());