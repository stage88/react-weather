/**
 * @flow
 */

'use strict';

import { weatherApiKey, weatherApiUrl } from '../config';
import type { WeatherModel, WeatherObservation, WeatherForecast } from '../models/view';

import dateFormat from 'dateformat';

class WeatherService {
  // getWeatherFromApi(locationId: string) {
  //   const promise = this.getWeatherFromApiAsync(locationId);
  //   promise.then(function(result) {
  //     return result;
  //   }, function(error) {
  //     return null;
  //   });
  // }

  async getWeatherFromApiAsync(locationId: string) {
    var observation = await this.getWeatherObservationFromApiAsync(locationId);
    var forecast = await this.getWeatherForecastFromApiAsync(locationId);

    observation.low = forecast[0].low;
    observation.high = forecast[0].high;
    observation.icon = forecast[0].icon;

    var result = {
      observation: observation,
      forecast: forecast
    };
    global.log(result);

    return result;
  }

  async getWeatherObservationFromApiAsync(locationId: string) {
    const url = `${weatherApiUrl}/weather?id=${locationId}&units=metric&appid=${weatherApiKey}`;

    try {
      let response = await fetch(url);
      const result = await response.json();

      return {
        location: 'Canberra',
        forecast: result.weather[0].main,
        feelsLike: (result.main.temp_min | 0),
        current: (result.main.temp | 0),
        low: '',
        high: '',
        icon: ''
      };
    } catch(error) {
      // Handle error
      global.log(error);
    }
  }

  async getWeatherForecastFromApiAsync(locationId: string) {
    const url = `${weatherApiUrl}/forecast/daily?id=${locationId}&cnt=7&units=metric&appid=${weatherApiKey}`;

    try {
      let response = await fetch(url);
      const result = await response.json();

      return result.list.map((item, index) => {
        return {
          day: this.getDayFromUtcDate(item.dt),
          forecast: item.weather[0].main,
          low: (item.temp.min | 0),
          high: (item.temp.max | 0),
          icon: item.weather[0].icon
        }
      });
    } catch(error) {
      // Handle error
      global.log(error);
    }
  }

  getDayFromUtcDate(date: number): string {
    var value = new Date(date * 1000);
    var day = dateFormat(value, 'dddd');

    return day;
  }
}

module.exports = WeatherService;
