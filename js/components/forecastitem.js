/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

const renderForecastImage = require('./forecastimage');

type Props = {
  index: number;
  day: string;
  icon: string;
  low: string;
  high: string;
  separator: any;
};

class ForecastItem extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    var day = this.props.index === 1 ? 'Tomorrow' : this.props.day;
    return (
      <View style={[styles.forecastItem, this.props.separator]}>
        <View stye={styles.forecastItemDayView}>
          <Text style={styles.dayText}>{ day }</Text>
        </View>
        <View style={styles.forecastItemDataView}>
          { renderForecastImage(this.props.icon, 22, 22) }
          <Text style={styles.forecastItemTempLow}>{ this.props.low }</Text>
          <Text style={styles.forecastItemTempHigh}>{ this.props.high }</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forecastItem: {
    paddingTop: 14,
    paddingBottom: 12,
    flexDirection: 'row'
  },
  forecastItemDayView: {
    flex: 1
  },
  forecastItemDataView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  dayText: {
    fontSize: 16
  },
  forecastItemTempLow: {
    textAlign: 'right',
    marginLeft: 16,
    width: 20,
    color: '#B0B5BF',
    fontSize: 16
  },
  forecastItemTempHigh: {
    textAlign: 'right',
    marginLeft: 16,
    width: 20,
    fontSize: 16
  }
});

module.exports = ForecastItem;