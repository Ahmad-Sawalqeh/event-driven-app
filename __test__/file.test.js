'use strict ';

jest.mock('fs');
const log = require('../logger.js');
const alterFile = require('../file.js');

describe('file module ', () => {

  it('bad file path', () => {
    let file = `wrong/path/to/file`;

    return alterFile(file, (error, data) => {
      expect(error).toBeFalsy();
    });
  });

  it('real file path', () => {
    let file = `${__dirname}/text.txt`;
    return alterFile(file, (error, data) => {
      expect(typeof data).toBe('object');
      expect(error).toBeDefined();
    });
  });


});

describe('logger', () => {

  let consoleSpy;
  let events = '';
  let payload = '';

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('spying on output of console.log() method', () => {
    log(events , payload);
    expect(consoleSpy).toHaveBeenCalled();
  });

});