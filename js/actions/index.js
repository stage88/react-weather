/**
 * @flow
 */

'use strict';

const weather = require('./weather');
const location = require('./location');

module.exports = {
  ...weather,
  ...location
};
