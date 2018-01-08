'use strict';

class Queue {
  constructor() {
    this._q = [];
    this._l = 0;
  }

  enqueue(items) {
    if (items instanceof Array) {
      this._l = this._q.push(...items);
    } else {
      this._l = this._q.push(items);
    }
  }

  dequeue() {
    let el = this._q.splice(0, 1)[0];
    this._l = this._q.length;
    return el;
  }

  peek() {
    return this._q[0];
  }

  length() {
    return this._l;
  }
}

module.exports = Queue;