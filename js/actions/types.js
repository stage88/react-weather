/**
 * @flow
 */

'use strict';

import type { WeatherModel } from '../models/view';

export type Action =
    { type: 'INITIALISE_STORE' }
  | { type: 'GET_WEATHER_ALL', data: WeatherModel };;
