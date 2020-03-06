'use strict';

process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';

const jest = require('jest');

const args = process.argv.slice(2);

jest.run(args);
