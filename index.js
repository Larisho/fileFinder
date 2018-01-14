"use strict";

// TODO: Add switch (or make default) searching by contains and not equals
// TODO: Add switch for exit on find as opposed to finding all matches

let path = require('path');
let walk = require('./src/fileFinder');
let args = process.argv.slice(2);

if (args.length !== 2) {
  process.stderr.write('Usage: fileFinder starting_dir file');
  process.exit(-1);
}

let baseDir = args[0];
let file = args[1];

baseDir = path.resolve(baseDir);
let ret = walk(baseDir, file);

if (ret === 'File not found') {
  process.stderr.write(ret + '\n');
  process.exit(-1);
} else {
  process.stdout.write(ret + '\n');
  process.exit(0);
}
