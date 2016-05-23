/**
 * @flow
 */

'use strict';

function warn(error) {
  console.warn(error.message || error);
  throw error; // To let the caller handle the rejection
}

module.exports = (store: any) => (next: any) => (action: any) =>
  typeof action.then === 'function'
    ? Promise.resolve(action).then(next, warn)
    : next(action);
