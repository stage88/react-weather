/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';
import type { Postcode } from '../models/view';

export type State = {
  data: Array<Postcode>;
};

const initial: State = {
  data: []
};

function postcode(state: State = initial, action: Action): State {
  switch (action.type) {
    case 'POSTCODE_SEARCH':
      return {
        data: action.data
      };
    case 'POSTCODE_CLEAR':
      return {
        data: []
      };
    default:
      return state;
  }
}

module.exports = postcode;
