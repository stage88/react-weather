/**
 * @flow
 */

'use strict';

import React from 'React';
import App from './app';
import TestDataRepository from './repositories/testdata';

function setup(): React.Component {

  class Root extends React.Component {
    testDataRepository: TestDataRepository;

    constructor() {
      super();

      var testDataRepository = new TestDataRepository();

      this.state = {
        isLoading: false,
        data: testDataRepository.getAll()
      };
    }

    render() {
      if (this.state.isLoading) {
        return null;
      }

      return (
        <App
          observation={this.state.data.observation}
          forecast={this.state.data.forecast} />
      );
    }
  }

  return Root;
}

module.exports = setup;
