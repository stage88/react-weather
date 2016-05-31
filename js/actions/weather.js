/**
 * @flow
 */

'use strict';

import type { Action } from './types';
import WeatherService from '../services/weather';

const service = new WeatherService();

async function getAllWeather() {
  const locationIds = [
    '6619483', // Kaleen
    '2147714', // Sydney,
    '2174003', // Brisbane
  ];
  const weather = await service.getWeatherArrayFromApiAsync(locationIds);
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
