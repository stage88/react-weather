/**
 * @flow
 */

'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
  weather: require('./weather'),
  location: require('./location'),
  postcode: require('./postcode')
});
