/**
 * @flow
 */

'use strict';

import type { Action } from './types';
import WeatherService from '../services/weather';
import TestDataRepository from '../repositories/testdata';

const service = new WeatherService();
const testdata = new TestDataRepository();

async function getAllWeather() {
  const locationIds = [
    '2172517', // Canberra
    '2147714', // Sydney,
    '2174003', // Brisbane
    '2158177', // Melbourne,
    '2063523', // Perth,
    '2073124', // Darwin
  ];
  const weather = await service.getWeatherArrayFromApiAsync(locationIds);
  //const weather = testdata.getAll();

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
