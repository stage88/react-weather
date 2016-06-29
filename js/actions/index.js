/**
 * @flow
 */

'use strict';

const weather = require('./weather');
const location = require('./location');
const postcode = require('./postcode');

module.exports = {
  ...weather,
  ...location,
  ...postcode
};
