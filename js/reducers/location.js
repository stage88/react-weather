/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';
import type { Location } from '../models/view';

export type State = {
  isInitalised: bool;
  data: Array<Location>;
};

const initial: State = {
  isInitalised: false,
  data: []
};

function location(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'LOCATION_INITIALISED':
      return {
        ...state,
        isInitalised: true
      };
    case 'LOCATION_GET_ALL':
      return {
        ...state,
        data: action.data
      }
    default:
      return state;
  }
}

module.exports = location;
