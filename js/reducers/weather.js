/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';
import type { WeatherModel } from '../models/view';

export type State = {
  isLoading: bool;
  weather: ?WeatherModel;
};

function weather(state: State = {weather: null, isLoading: true}, action: Action): State {
  switch (action.type) {
    case 'GET_WEATHER_ALL':
      return {isLoading: false, ...action.data};
    default:
      return state;
  }
}

module.exports = weather;
