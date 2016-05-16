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
        day: 'Tomorrow',
        forecast: 'Partly Cloudy',
        low: '3',
        high: '20'
      },
      {
        day: 'Saturday',
        forecast: 'Sunny',
        low: '6',
        high: '17'
      },
      {
        day: 'Sunday',
        forecast: 'Rain',
        low: '1',
        high: '15'
      },
      {
        day: 'Monday',
        forecast: 'Sunny',
        low: '6',
        high: '17'
      },
      {
        day: 'Tuesday',
        forecast: 'Sunny',
        low: '6',
        high: '17'
      },
      {
        day: 'Wednesday',
        forecast: 'Mostly Sunny',
        low: '13',
        high: '24'
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
