/**
 * @flow
 */

'use strict';

export type WeatherForecast = {
  day: string;
  forecast: string;
  low: string;
  high: string;
  icon: string;
};

export type WeatherObservation = {
  location: string;
  forecast: string;
  feelsLike: string;
  current: string;
  low: string;
  high: string;
  icon: string;
};

export type WeatherModel = {
  observation: WeatherObservation;
  forecast: Array<WeatherForecast>;
};
