/**
 * @flow
 */

'use strict';

import type { Action } from './types';
import WeatherService from '../services/weather';
import TestDataRepository from '../repositories/testdata';
import { isDebugData } from '../config';

const service = new WeatherService();
const testdata = new TestDataRepository();
const locationIds = [
  '2172517', // Canberra
  '2147714', // Sydney,
  '2174003', // Brisbane
  '2158177', // Melbourne,
  '2063523', // Perth,
  '2073124', // Darwin
];

async function getAllWeather() {
  const weather = isDebugData
    ? testdata.getAll()
    : await service.getWeatherArrayFromApiAsync(locationIds);

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
