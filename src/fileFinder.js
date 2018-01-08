'use strict';

let fs = require('fs');
let path = require('path');

let queue = new require('./queue')();

module.exports = function(baseDir, file) {
    let readdir = fs.readdirSync(baseDir, { encoding: 'utf8' });

    readdir.forEach((item) => {
        if (file === item) {
            return path.resolve(item);
        }

        let itemStats = fs.statSync(item);
        if (itemStats.isDirectory) {
            queue.enqueue(path.resolve(item));
        }
    });
};