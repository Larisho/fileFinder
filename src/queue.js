'use strict';

class Queue {
    private q;
    private l;

    constructor() {
        this.q = [];
        this.l = 0;
    }

    enqueue(...items) {
        this.l = this.q.push(items);
    }

    dequeue() {
        return this.q.splice(0, 1);
    }

    peek() {
        return this.q[0];
    }

    length() {
        return this.l;
    }
}