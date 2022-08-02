/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

// * Greedy
// Time: O(N)
// Space: O(1)
var canCompleteCircuit = function(gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  
  for(let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
  }
 
  if(totalGas < totalCost) return -1;
  
  let startIdx = 0;
  let currentGasAmount = 0;
  
  for(let i = 0; i < gas.length; i++) {
    currentGasAmount += (gas[i] - cost[i]);
    
    if(currentGasAmount < 0) {
      currentGasAmount = 0;
      startIdx = i + 1;
    }
  }

  return startIdx;
};

class Node {
  constructor(cost, gas, next, index) {
    this.cost = cost;
    this.gas = gas;
    this.index = index;
    this.next = next || null;
  }
}

// * LinkedList
// ! Time Limit Exceeded (34/37)

// 1. 將 array 轉換為 circular linkedList
// 2. 使用 brute force 嘗試從每一個 node 作為起始點出發
// 3. 使用 set 紀錄已走過的路線，若 set 重複代表繞一圈回來
// Time : O(N^2)
// Space : O(N^2)
var canCompleteCircuit = function(gas, cost) {
  let head = new Node(null, null); // dummy head
  let currentNode = head;
  
  for(let i = 0; i < cost.length; i++) {
    currentNode.next = new Node(cost[i], gas[i], null, i);
    currentNode = currentNode.next;
  }
  
  head = head.next;
  currentNode.next = head; // make it a circular
  currentNode = head;
  const set = new Set();
  
  while(!set.has(currentNode)) {
    set.add(currentNode);
    
    const innerSet = new Set();
    let node = currentNode;
    let amount = 0;
    
    while (true) {
      amount += node.gas;
      
      if (innerSet.has(node)) return node.index;
      
      if (amount < node.cost) {
        currentNode = currentNode.next;
        break;
      }

      innerSet.add(node);
      amount -= node.cost;
      node = node.next;
    }
  }
  
  return -1;
};