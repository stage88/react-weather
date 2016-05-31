/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';
import type { WeatherModel } from '../models/view';

export type State = {
  isLoading: bool;
  data: Array<WeatherModel>;
  current: number;
};

const initial: State = {
  isLoading: false,
  data: [],
  current: 0
};

function weather(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'WEATHER_SET_LOADING':
      return {
        ...state,
        isLoading: true
      };
    case 'WEATHER_GET_ALL':
      return {
        ...state,
        isLoading: false,
        data: action.data,
      };
    default:
      return state;
  }
}

module.exports = weather;
