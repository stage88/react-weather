/**
 * @flow
 */

'use strict';

import type { WeatherModel } from '../models/view';

export type Action =
    { type: 'WEATHER_SET_LOADING' }
  | { type: 'WEATHER_SET_REFRESHING' }
  | { type: 'WEATHER_GET_ALL', data: Array<WeatherModel> };
