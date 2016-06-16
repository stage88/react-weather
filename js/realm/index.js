/**
 * @flow
 */

'use strict';

import Realm from 'realm';
import Schema from './schema';

function getCurrent() {
  var schema = new Schema();
  var current = schema.current();

  return new Realm(current);
}

module.exports = {
  current: getCurrent
}
