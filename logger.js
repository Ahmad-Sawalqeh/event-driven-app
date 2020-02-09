/* eslint-disable strict */
'use strict';

const events = require('./event.js');

events.on('read',payload => log('read',payload));
events.on('error',payload => log('error',payload));

function log(events , payload){
  let date = new Date();
  let time = `${date.getFullYear()}-${(date.getMonth() + 1)}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  let listeners = {
    events,
    time,
    payload,
  };

  console.log('listeners => ', listeners);
}

module.exports = log;