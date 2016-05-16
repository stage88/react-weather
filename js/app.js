/**
 * @flow
 */

'use strict';

var StatusBar = require('StatusBar');

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import Header from './components/header';
import Forecast from './components/forecast';

import type {
  WeatherObservation,
  WeatherForecast
} from './models/view'

type Props = {
  observation: WeatherObservation;
  forecast: Array<WeatherForecast>;
};

class App extends Component {
  props: Props;

  render() {
    const {
      location,
      forecast,
      feelsLike,
      current,
      low,
      high
    } = this.props.observation;

    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor='transparent'
          barStyle='light-content'/>
        <Header observation={this.props.observation}>
          <Forecast forecast={this.props.forecast} />
        </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});

module.exports = App;
