/**
 * @flow
 */

'use strict';

import type {
  WeatherForecast,
  WeatherObservation,
  WeatherModel
} from '../models/view';

class TestDataRepository {
  getAll(): WeatherModel {
    return {
      observation: this._getObservation(),
      forecast: this._getForecast()
    }
  }

  _getObservation(): WeatherObservation {
    return {
      location: 'Canberra',
      forecast: 'Partly Cloudy',
      feelsLike: '7.9',
      current: '11.0',
      low: '4',
      high: '23'
    };
  }

  _getForecast(): Array<WeatherForecast> {
    return [
      {
        day: 'Tomorrow',
        forecast: 'Partly Cloudy',
        low: '3',
        high: '20'
      },
      {
        day: 'Saturday',
        forecast: 'Sunny',
        low: '6',
        high: '17'
      },
      {
        day: 'Sunday',
        forecast: 'Rain',
        low: '1',
        high: '15'
      },
      {
        day: 'Monday',
        forecast: 'Mostly Sunny',
        low: '6',
        high: '17'
      },
      {
        day: 'Tuesday',
        forecast: 'Cloudy',
        low: '6',
        high: '17'
      },
      {
        day: 'Wednesday',
        forecast: 'Possible Shower',
        low: '13',
        high: '24'
      }
    ];
  }
}

module.exports = TestDataRepository;
