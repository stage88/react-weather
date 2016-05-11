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

type WeatherObservation = {
  location: string;
  forecast: string;
  feelsLike: string;
  current: string;
  low: string;
  high: string;
};

type WeatherForecast = {
  day: string;
  forecast: string;
  low: string;
  high: string;
}

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
        <Header
          location={location}
          forecast={forecast}
          feelsLike={feelsLike}
          current={current}
          low={low}
          high={high}>
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
