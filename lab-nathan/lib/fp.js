'use strict';

let fp = {};
module.exports = fp;

fp.map = (array, callback) => {
  return Array.prototype.map.call(array, callback);
};