'use strict';

let Queue = require('../src/queue');
let expect = require('chai').expect;

module.exports = function () {
  it('should enqueue successfully', () => {
    let queue = new Queue();

    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue._q).to.deep.equal(['a', 'b', 'c']);
  });

  it('should maintain a correct count of items in the queue', () => {
    let queue = new Queue();

    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue._l).to.equal(3);
  });

  it('should dequeue properly', () => {
    let queue = new Queue();

    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue.dequeue()).to.equal('a');
  });

  it('should be smaller after a dequeue', () => {
    let queue = new Queue();

    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    queue.dequeue();

    expect(queue.length()).to.equal(2);
  });

  it('should return front of the queue', () => {
    let queue = new Queue();

    queue.enqueue('a');
    queue.enqueue('b');
    queue.enqueue('c');

    expect(queue.peek()).to.equal('a');
  });
};