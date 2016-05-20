/**
 * @flow
 */

'use strict';

import type { Action } from '../actions/types';

function initialise(state: bool, action: Action): bool {
  switch (action.type) {
    case 'INITIALISE_STORE':
      return true;
    default:
      return false;
  }
}

module.exports = initialise;
