/**
 * @flow
 */

'use strict';

import React from 'React';
import { Provider } from 'react-redux';
import App from './app';

import configureStore from './store/configure';
import { initialise } from './actions';

function setup(): React.Component {

  class Root extends React.Component {
    constructor() {
      super();

      this.state = {
        store: configureStore()
      };
      this.state.store.dispatch(initialise());
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <App />
        </Provider>
      );
    }
  }

  return Root;
}

global.log = (...args) => {
  console.log('------------------------------');
  console.log(...args);
  console.log('------------------------------');
  return args[args.length - 1];
};

module.exports = setup;
