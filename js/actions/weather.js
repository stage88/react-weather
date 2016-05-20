/**
 * @flow
 */

'use strict';

import type { Action } from './types';
import WeatherService from '../services/weather';

const service = new WeatherService();

async function getAllWeather() {
  const weather = await service.getWeatherFromApiAsync('6619483');
  return {
    type: 'GET_WEATHER_ALL',
    data: weather
  };
}

module.exports = {
  getAllWeather
}
