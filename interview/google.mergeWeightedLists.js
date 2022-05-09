// https://leetcode.com/discuss/interview-question/2015225/Google-Interview-Question
// Given two weighted lists, sorted by weight, merge the weights of matching terms and return the merged values in weight ascending order.

// Time: O(N * log(N))
// merge two array with hash map (O(n))
// sorted -> O(n*log(n))
const merge = function(weightedLists) {
  const map = new Map();

  for(const item of weightedLists[0]) {
    const key = Object.keys(item)[0];
    const value = item[key];
    map.set(key, value);
  }

  for(const item of weightedLists[1]) {
    const key = Object.keys(item)[0];
    const value = item[key];
    map.set(key, map.has(key) ? map.get(key) + value : value);
  }

  const mergedList = []

  map.forEach((value, key) => {
    mergedList.push({ [key]: value });
  })

  return mergedList.sort((a, b) => {
    return Object.values(a)[0] - Object.values(b)[0];
  })
}

const input = [[{'ab': 1}, {'fg': 5}, {'cd': 8}], [{'cd': 1}, {'ab': 5}]]

console.log(merge(input)) // [ ('fg', 5), ('ab', 6), ('cd', 9) ]