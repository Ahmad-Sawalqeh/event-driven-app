/* eslint-disable strict */
'use strict';


let file = `${__dirname}/text.txt`;
// let file = `${__dirname}/data/person.json`;

// let args = process.argv;
// let file = process.argv.slice(2).shift();
process.argv[2] = file;
