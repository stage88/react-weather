/**
 * @flow
 */

'use strict';

var { combineReducers } = require('redux');

module.exports = combineReducers({
  isLoading: require('./initialise'),
  weather: require('./weather')
});
