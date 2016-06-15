/**
 * @flow
 */

'use strict';

import type { Action } from './types';

import WeatherService from '../services/weather';
const service = new WeatherService();

async function getAllWeather() {
  const weather = await service.getAllWeather();
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

function setWeatherRefreshing() {
  return {
    type: 'WEATHER_SET_REFRESHING'
  };
}

module.exports = {
  getAllWeather,
  setWeatherLoading,
  setWeatherRefreshing
}
