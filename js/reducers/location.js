/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';

export type State = {
  isInitalised: bool;
};

const initial: State = {
  isInitalised: false
};

function location(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'LOCATION_INITIALISED':
      return {
        isInitalised: true
      };
    default:
      return state;
  }
}

module.exports = location;
