/**
 * @flow
 */

'use strict';

var App = require('./app');
var React = require('React');

function getData() {
  return {
    observation: {
      location: 'Queanbeyan',
      forecast: 'Partly Cloudy',
      feelsLike: '7.9',
      current: '11.0',
      low: '4',
      high: '23'
    },
    forecast: [
      {
        day: 'Today',
        forecast: 'Partly Cloud',
        low: '3',
        high: '20'
      }
    ]
  };
}

function setup(): React.Component {

  class Root extends React.Component {
    constructor() {
      super();
      this.state = {
        isLoading: false,
        data: getData()
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
