'use strict';

const runner = require("./commander/runner.js");
const sequences = require("./commander/sequences.js")[String(process.argv[2])];

//this looks up the command sequence by index in ./commander/sequences
runner(process.argv[3], sequences.commands, sequences.message);
