/**
 * @flow
 */

'use strict';

import schema_v1 from './schema-v1';
import schema_v2 from './schema-v2';

class Schema {
  schemas: Array<any>;

  constructor() {
    this.schemas = [
      schema_v1,
      schema_v2
    ];
  }

  current() {
    return this.schemas[this.schemas.length - 1];
  }
}

module.exports = Schema;
