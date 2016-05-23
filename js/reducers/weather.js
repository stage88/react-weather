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

const initial: State = {
  isLoading: false,
  weather: null
};

function weather(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'WEATHER_SET_LOADING':
      return {...state, isLoading: true}
    case 'WEATHER_GET_ALL':
      return {isLoading: false, ...action.data};
    default:
      return state;
  }
}

module.exports = weather;
