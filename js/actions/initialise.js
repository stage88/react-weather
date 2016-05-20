/**
 * @flow
 */

'use strict';

import type { Action } from './types';

function initialise(): Action {
  return {
    type: 'INITIALISE_STORE'
  };
}

module.exports = {
  initialise
}
