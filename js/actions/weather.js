/**
 * @flow
 */

'use strict';

import type { Action } from './types';

import WeatherService from '../services/weather';
const service = new WeatherService();

const maxAgeInSeconds = (10 * 60); // 10 minutes

function getAllWeather() {
  return (dispatch: any) => {
    service.getAllWeather(false).then(
      (result) => {
        dispatch({
          type: 'WEATHER_GET_ALL',
          data: result
        });

        var dates = result.map((item) => item.freshness);
        var freshness = new Date(Math.min(...dates));
        if (getAgeInSeconds(freshness) > maxAgeInSeconds) {
          dispatch(setWeatherRefreshing());
          dispatch(forceWeatherUpdate());
        }
      }
    );
  };
}

async function forceWeatherUpdate() {
  var result = await service.getAllWeather(true);
  return {
    type: 'WEATHER_GET_ALL',
    data: result
  };
}

function getAgeInSeconds(freshness: Date) {
  return Math.floor((Date.now() - freshness.getTime()) / 1000);
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
