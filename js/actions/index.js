/**
 * @flow
 */

'use strict';

const initialise = require('./initialise');
const weather = require('./weather');

module.exports = {
  ...initialise,
  ...weather
};
