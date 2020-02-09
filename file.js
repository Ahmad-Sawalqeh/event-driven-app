/* eslint-disable strict */
'use strict';

const fs = require('fs');
const events = require('./event.js');
require('./logger.js');

const  { promisify }  = require('util');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

let file = `${__dirname}/text.txt`;
// let file = `${__dirname}/data/person.json`;

const alterFile = (file) => {

  readFile(file)
    .then(data => {
      events.emit('read', 'The file has been read' );
      let text = Buffer.from(data.toString().toUpperCase());
      write(text);
    })
    .catch(() => {
      events.emit('error => ', Promise.reject());
      // console.error(err);
    });

};

const write = (text) => {

  writeFile(file, text)
    .then(() => {
      events.emit( 'read', 'The file contant converted to upper case letter' );
    })
    .catch(err => {
      events.emit('error => ', Promise.reject());
      // console.error(err);
    });

};

alterFile(file);

// const alterFile = (file) => {
//   fs.readFile( file, (err, data) => {
//     if(err) { throw err; }
//     let text = data.toString().toUpperCase();
//     fs.writeFile( file, Buffer.from(text), (err, data) => {
//       if(err) { throw err; }
//       console.log(`${file} saved`);
//     });
//   });
// };

module.exports = alterFile;

// manualy to promisfy a function:
// promise version:
// const writeFilePromise = (file, data) => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, data, error => {
//       if (error) reject(error);
//       resolve(`file created successfully with handcrafted Promise!`);
//     });
//   });
// };
//
// fs.writeFilePromise(
//   `/tmp/test2.js`,
//   `console.log('Hello world with handcrafted promise!');`)
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

// async/await version:
// async function main() {
//   await writeFile(`/tmp/test4.js`,
//     `console.log('Hello world with promisify and async/await!');`);

//   console.info(`file created successfully with promisify and async/await!`);
// }

// main().catch(error => console.error(error));
