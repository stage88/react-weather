/**
 * @flow
 */

'use strict';

var { weatherApiKey } = require('./release/keys');
// import { weatherApiKey } from './release/keys';

module.exports = {
  weatherApiKey: weatherApiKey,
  weatherApiUrl: 'http://api.openweathermap.org/data/2.5',
  postcodeApiUrl: 'http://v0.postcodeapi.com.au/suburbs.json',
  isDebugData: false
};
