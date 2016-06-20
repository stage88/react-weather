/**
 * @flow
 */

'use strict';

import type { WeatherModel, Location } from '../models/view';

export type Action =
    { type: 'WEATHER_SET_LOADING' }
  | { type: 'WEATHER_SET_REFRESHING' }
  | { type: 'WEATHER_GET_ALL', data: Array<WeatherModel> }
  | { type: 'LOCATION_INITIALISED'}
  | { type: 'LOCATION_GET_ALL', data: Array<Location>}
  | { type: 'LOCATION_CLEAR_ALL_DATA'};
