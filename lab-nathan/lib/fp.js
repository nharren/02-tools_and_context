'use strict';

let fp = {};
module.exports = fp;

fp.map = (array, func) => Array.prototype.map.call(array, func);
fp.filter = (array, predicate) => Array.prototype.filter.call(array, predicate);
fp.reduce = (array, func, initialValue) => Array.prototype.reduce.call(array, func, initialValue);
fp.concat = (arrayA, arrayB) => Array.prototype.concat.call(arrayA, arrayB);
fp.splice = (array, start, deleteCount, items) => {
  Array.prototype.splice.call(array, start, deleteCount, ...items);
  return array;
};