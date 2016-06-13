/**
 * @flow
 */

'use strict';

class Observation {
  schema: {
    name: 'Observation',
    properties: {
      forecast: 'string',
      feelsLike: 'string',
      current: 'string',
      low: 'string',
      high: 'string',
      icon: 'string'
    }
  }
}

class Forecast {
  schema: {
    name: 'Forecast',
    properties: {
      day: 'string',
      forecast: 'string',
      low: 'string',
      high: 'string',
      icon: 'string'
    }
  }
}

class Location {
  schema: {
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
  }
}

module.exports = {
  Observation,
  Forecast,
  Location
}
