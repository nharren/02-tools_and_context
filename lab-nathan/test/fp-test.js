'use strict';

const fp = require('../lib/fp.js');
const expect = require('chai').expect;

describe('fp', () => {
  describe('#map()', () => {
    it('should fail with invalid inputs.', () => {
      expect(fp.map).to.throw(Error);
    });

    it('should return an array of doubled values.', () => {
      let result = fp.map([1, 2, 3], num => num * 2);
      expect(result).to.deep.equal([2, 4, 6]);
    });
  });

  describe('#filter()', () => {
    it('should fail with invalid inputs.', () => {
      expect(fp.filter).to.throw(Error);
    });

    it('should return 2.', () => {
      let result = fp.filter([1, 2, 3], num => num !== 2);
      expect(result).to.deep.equal([1, 3]);
    });
  });

  describe('#reduce()', () => {
    it('should fail with invalid inputs.', () => {
      expect(fp.reduce).to.throw(Error);
    });

    it('should return 6.', () => {
      let result = fp.reduce([1, 2, 3], (acc, cur) => acc + cur, 0);
      expect(result).to.equal(6);
    });
  });

  describe('#concat()', () => {
    it('should fail with invalid inputs.', () => {
      expect(fp.concat).to.throw(Error);
    });

    it('should return [1, 2, 3, 4, 5, 6].', () => {
      let result = fp.concat([1, 2, 3], [4, 5, 6]);
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('#splice()', () => {
    it('should fail with invalid inputs.', () => {
      expect(fp.splice).to.throw(Error);
    });

    it('should return [1, 2, 3, 7, 8, 9, 4, 5, 6].', () => {
      let result = fp.splice([1, 2, 3, 4, 5, 6], 3, 0, [7, 8, 9]);
      expect(result).to.deep.equal([1, 2, 3, 7, 8, 9, 4, 5, 6]);
    });
  });
});