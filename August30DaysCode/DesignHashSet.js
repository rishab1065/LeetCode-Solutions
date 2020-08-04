/**
 * Initialize your data structure here.
 */
var MyHashSet = function () {
  this.values = {};
  return this;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function (key) {
  this.values[key] = key;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function (key) {
  delete this.values[key];
};

/**
 * Returns true if this set contains the specified element
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function (key) {
  return this.values.hasOwnProperty(key);
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 **/
var obj = new MyHashSet();
console.log(obj);
obj.add(0);
// obj.remove(key);
var param_3 = obj.contains(0);
console.log(param_3);
