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
    type: 'WEATHER_GET_ALL',
    data: weather
  };
}

function setWeatherLoading() {
  return {
    type: 'WEATHER_SET_LOADING'
  };
}

module.exports = {
  getAllWeather,
  setWeatherLoading
}
