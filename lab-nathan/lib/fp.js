'use strict';

let fp = {};
module.exports = fp;

fp.map = (array, callback) =>  Array.prototype.map.call(array, callback);
fp.filter = (array, predicate) => Array.prototype.filter.call(array, predicate);