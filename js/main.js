/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './app';

import configureRealm from './realm/configure';
import configureStore from './store/configure';
import { setWeatherLoading, initaliseLocations } from './actions';

type State = {
  store: any;
};

function setup() {

  class Root extends Component {
    state: State;

    constructor() {
      super();
      configureRealm();

      this.state = {
        store: configureStore()
      };

      this.state.store.dispatch(setWeatherLoading());
      this.state.store.dispatch(initaliseLocations());
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
