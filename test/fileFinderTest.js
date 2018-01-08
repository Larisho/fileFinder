'use strict';

let walk = require('../src/fileFinder');
let expect = require('chai').expect;

module.exports = function () {
  it('should find the file in question', () => {
    let baseDir = '/home/gab';
    let file = 'index.js';

    expect(walk(baseDir, file)).to.equal('/home/gab/sourceCode/fileFinder/index.js');
  });

  it('should return fail gracefully', () => {
    let baseDir = '/home/gab';
    let file = 'non-existent-file.js';

    expect(walk(baseDir, file)).to.equal('File not found');
  });
};