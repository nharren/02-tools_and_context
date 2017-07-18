'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('fp', function() {
  describe('#map()', function() {
    it('should return an array of doubled values.', function() {
      let result = fp.map([1, 2, 3], num => num * 2);
      expect(result).to.equal([2, 4, 6]);
    });
  });

  describe('#filter()', function() {
    it('should return 2.', function() {
      let result = fp.filter([1, 2, 3], 2);
      expect(result).to.equal([1, 3]);
    });
  });

  describe('#reduce()', function() {
    it('should return 6.', function() {
      let result = fp.reduce([1, 2, 3], (acc, cur) => acc + cur, 0);
      expect(result).to.equal(6);
    });
  });

  describe('#concat()', function() {
    it('should return [1, 2, 3, 4, 5, 6].', function() {
      let result = fp.concat([1, 2, 3], [4, 5, 6]);
      expect(result).to.equal([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('#splice()', function() {
    it('should return [1, 2, 3, 7, 8, 9, 4, 5, 6].', function() {
      let result = fp.splice([1, 2, 3, 4, 5, 6], 3, [7, 8, 9]);
      expect(result).to.equal([1, 2, 3, 7, 8, 9, 4, 5, 6]);
    });
  });
});