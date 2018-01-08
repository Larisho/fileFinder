'use strict';

let fs = require('fs');
let path = require('path');

let Queue = require('./queue');
let queue = new Queue();

module.exports = function (baseDir, file) {
  queue.enqueue(readdirSyncFullPath(baseDir));

  let item;
  while (item = queue.dequeue()) {
    if (file === item.split(path.sep).slice(-1).pop()) {
      return path.resolve(item);
    }

    let itemStats = fs.lstatSync(item);
    if (itemStats.isDirectory()) {
      queue.enqueue(readdirSyncFullPath(item));
    }
  }

  return 'File not found';
};

function readdirSyncFullPath(dir) {
  return fs.readdirSync(dir, {encoding: 'utf8'}).map((val) => {
    return dir + path.sep + val;
  })
}

/*
    read directory into queue

    while queue not empty
        check directory for file if found
            return name
        if not there, put all directories in directory into queue

    return not found
 */