'use strict';

let queueTest = require('./queueTest.spec');
let fileFinderTest = require('./fileFinderTest');

describe('fileFinder Test Suite', () => {

  describe('Queue Test', queueTest);

  describe('fileFinder Test', fileFinderTest);
});