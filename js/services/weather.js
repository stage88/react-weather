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

  async getWeatherArrayFromApiAsync(locationIds: Array<string>) {
    var data = [];
    for (var index = 0; index < locationIds.length; ++index) {
      var locationId = locationIds[index];
      var result = await this.getWeatherFromApiAsync(locationId);

      data.push(result);
    }

    return data;
  }

  async getWeatherFromApiAsync(locationId: string) {
    var observation = await this.getWeatherObservationFromApiAsync(locationId);
    var forecast = await this.getWeatherForecastFromApiAsync(locationId);

    if (observation && forecast) {
      observation.low = forecast[0].low;
      observation.high = forecast[0].high;
      observation.icon = forecast[0].icon;
    }

    var result = {
      id: locationId,
      observation: observation,
      forecast: forecast
    };

    return result;
  }

  async getWeatherObservationFromApiAsync(locationId: string) {
    var url = `${weatherApiUrl}/weather?id=${locationId}&units=metric&appid=${weatherApiKey}`;

    try {
      let response = await fetch(url);
      const result = await response.json();

      return {
        location: result.name,
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
    var url = `${weatherApiUrl}/forecast/daily?id=${locationId}&cnt=7&units=metric&appid=${weatherApiKey}`;

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
