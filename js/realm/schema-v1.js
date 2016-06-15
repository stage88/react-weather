/**
 * @flow
 */

'use strict';

const Observation = {
  name: 'Observation',
  properties: {
    forecast: 'string',
    feelsLike: 'string',
    current: 'string',
    low: 'string',
    high: 'string',
    icon: 'string'
  }
};

const Forecast = {
  name: 'Forecast',
  properties: {
    day: 'string',
    forecast: 'string',
    low: 'string',
    high: 'string',
    icon: 'string'
  }
};

const Location = {
  name: 'Location',
  properties: {
    name: 'string',
    postcode: 'string',
    state: 'string',
    openWeatherId: 'string',
    freshness: 'date',
    observation: 'Observation',
    forecast: {
      type: 'list',
      objectType: 'Forecast'
    }
  }
};

module.exports = {
  schema: [Observation, Forecast, Location],
  schemaVersion: 1,
  migration: () => {}
};
