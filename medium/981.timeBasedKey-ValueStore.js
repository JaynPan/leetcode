
var TimeMap = function() {
  this.cache = {};
};

/** 
* @param {string} key 
* @param {string} value 
* @param {number} timestamp
* @return {void}
*/
TimeMap.prototype.set = function(key, value, timestamp) {
if(this.cache[key]) {
  this.cache[key].push([value, timestamp]);
} else {
  this.cache[key] = [[value, timestamp]];  
}
};

/** 
* @param {string} key 
* @param {number} timestamp
* @return {string}
*/
TimeMap.prototype.get = function(key, timestamp) {
if(!this.cache[key]) return "";

const values = this.cache[key];
let left = 0;
let right = values.length - 1;

while(left <= right) {
  const middle = Math.floor((left + right) / 2);
  const value = values[middle];
  const time = value[1];
  
  if(timestamp === time) return value[0];
  
  if(timestamp > time) {
    left = middle + 1;
  } else {
    right = middle - 1;
  }
}

return right >= 0 ? this.cache[key][right][0] : "";
};

/** 
* Your TimeMap object will be instantiated and called as such:
* var obj = new TimeMap()
* obj.set(key,value,timestamp)
* var param_2 = obj.get(key,timestamp)
*/