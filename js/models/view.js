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
  freshness: Date;
  observation: WeatherObservation;
  forecast: Array<WeatherForecast>;
};

export type Location = {
  name: string;
  postcode: string;
  state: string;
  openWeatherId: string;
  observation: WeatherObservation;
};

export type Postcode = {
  name: string;
  postcode: number;
  state: string;
}
