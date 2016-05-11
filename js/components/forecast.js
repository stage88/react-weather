/**
 * @flow
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

type WeatherForecast = {
  day: string;
  forecast: string;
  low: string;
  high: string;
};

type Props = {
  forecast: Array<WeatherForecast>
};

class Forecast extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).renderForecast = this.renderForecast.bind(this);
  }

  render() {
    return (
      <View style={{flexDirection: 'row', height: 500}}>
        <View style={{flex: 1, backgroundColor: '#fff', borderColor: '#E2E2E2', paddingLeft: 12, paddingRight: 12}}>
          { this.renderForecast() }
        </View>
      </View>
    );
  }

  renderForecast() {
    return (
      this.props.forecast.map((item) => (
        <View key={item.day} style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
          <View stye={{flex: 1}}>
            <Text>{ item.day }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Image style={{width: 22, height: 22}} source={require('./img/rain_s_cloudy.png')} />
            <Text style={{marginLeft: 12}}>{ item.low }</Text>
            <Text style={{marginLeft: 12}}>{ item.high }</Text>
          </View>
        </View>
      ))
    );
  }
}

module.exports = Forecast
