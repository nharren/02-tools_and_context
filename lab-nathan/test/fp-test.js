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
});