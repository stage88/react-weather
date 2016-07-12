/**
 * @flow
 */

'use strict';

import Realm from 'realm';
import Schema from './schema';

function configureRealm() {
  var schema = new Schema();

  var next = Realm.schemaVersion(Realm.defaultPath);
  if (next > 0) {
    while (next < schema.schemas.length) {
      var migratedSchema = schema.schemas[next++];
      var migratedRealm = new Realm(migratedSchema);
      migratedRealm.close();
    }
  }

  var current = schema.current();
  var realm = new Realm(current);
  realm.close();
}

module.exports = configureRealm;
