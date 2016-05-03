/**
 * @flow
 */

'use strict';

var App = require('./app');
var React = require('React');

function setup(): React.Component {
  class Root extends React.Component {
    constructor() {
      super();
    }

    render() {
      return (
        <App />
      );
    }
  }

  return Root;
}

module.exports = setup;
