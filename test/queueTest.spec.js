'use strict';

let Queue = require('../src/queue');
let expect = require('chai').expect;

module.exports = function() {
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
};