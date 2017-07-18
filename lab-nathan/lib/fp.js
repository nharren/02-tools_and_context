'use strict';

let fp = {};
module.exports = fp;

fp.map = (array, func) => {
  return Array.prototype.map.call(array, func);
};

fp.filter = (array, predicate) => {
  return Array.prototype.filter.call(array, predicate);
};

fp.reduce = (array, func, initialValue) => {
  return Array.prototype.reduce.call(array, func, initialValue);
};

fp.concat = (arrayA, arrayB) => {
  return Array.prototype.concat.call(arrayA, arrayB);
};