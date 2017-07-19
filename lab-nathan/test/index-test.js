'use strict';

const expect = require('chai').expect;
const { spawn } = require('child_process');

describe('index', () => {
  it('should produce uppercase params.', done => {
    let child = spawn('node', ['index.js', 'hi', 'hello'], {
      shell: true,
    });

    let buffer = [];
    
    child.stdout.on('data', chunk => {
      buffer.push(chunk.toString().trim());
    });

    child.stdout.on('end', () => {
      expect(buffer.join(' ')).to.equal('HI HELLO');
      done();
    });
  });
});