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

  depthFistSearch() {

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

console.log(tree.breadthFirstSearch());