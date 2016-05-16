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
  ScrollView,
  Image
} from 'react-native';

import ParallaxScrollView from './parallaxview';
import type {
  WeatherObservation
} from '../models/view'

const renderForecastImage = require('./forecastimage')

import dateFormat from 'dateformat';
const today = dateFormat(new Date(), 'ddd d mmmm');

type Props = {
  observation: WeatherObservation;
  children: any;
};

const PARALLAX_HEADER_HEIGHT = 260;
const STICKY_HEADER_HEIGHT = 55;

class Header extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).renderStickyHeader = this.renderStickyHeader.bind(this);
    (this: any).renderHeader = this.renderHeader.bind(this);
    (this: any).renderForecastImage = this.renderForecastImage.bind(this);
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor='#589BC7'
        contentBackgroundColor='#F9F9F9'
        parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
        stickyHeaderHeight={STICKY_HEADER_HEIGHT}
        showsVerticalScrollIndicator={false}
        renderStickyHeader={this.renderStickyHeader}
        renderForeground={this.renderHeader}
        renderBackground={this.renderBackground}>
        { this.props.children }
      </ParallaxScrollView>
    );
  }

  renderBackground() {
    return (
      <Image source={require('./img/header-background.png')}/>
    );
  }

  renderStickyHeader() {
    return (
      <View style={styles.stickyHeaderView}>
        <Text style={styles.stickyHeaderLocation}>
          { this.props.observation.location }
        </Text>
        <Text style={styles.stickyHeaderToday}>{ today }</Text>
      </View>
    );
  }

  renderHeader() {
    return (
      <View>
        <View>
          <Text style={styles.location}>{ this.props.observation.location }</Text>
          <Text style={styles.forecast}>{ this.props.observation.forecast }</Text>
        </View>
        <View style={styles.centerView}>
          <View style={styles.centerImageView}>
            { renderForecastImage(this.props.observation.forecast, 100, 100) }</View>
          <View>
            <Text style={styles.currentTemp}>{ this.props.observation.current + '\u00B0'}</Text>
            <Text style={styles.feelsLike}>Feels like { this.props.observation.feelsLike }</Text>
          </View>
        </View>
        <View style={styles.bottomView}>
          <View style={styles.bottomViewLeft}>
            <Text style={styles.bottomViewToday}>
              Today
            </Text>
            <Text style={styles.bottomViewTodayDate}>{ today }</Text>
          </View>
          <View style={styles.bottomViewRight}>
            <Text style={styles.low}>{ this.props.observation.low }</Text>
            <Text style={styles.high}>
              { this.props.observation.high }
            </Text>
          </View>
        </View>
      </View>
    );
  }

  renderForecastImage() {
    switch (this.props.observation.forecast) {
      case 'Sunny':
        var image = require('./img/sunny.png');
        break;
      case 'Clear':
        var image = require('./img/sunny.png');
        break;
      case 'Partly Cloudy':
        var image = require('./img/partly_cloudy.png');
        break;
      default:
        var image = null;
        break
    }

    return (
      <Image style={styles.centerViewImage} source={image} />
    );
  }
}

const styles = StyleSheet.create({
  location: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 35,
    color: '#fff'
  },
  forecast: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 3,
    color: '#fff'
  },
  stickyHeaderView: {
    paddingTop: 24,
    paddingLeft: 12,
    flexDirection: 'row'
  },
  stickyHeaderLocation: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6
  },
  stickyHeaderToday: {
    color: '#fff'
  },
  centerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10
  },
  centerImageView: {
    paddingRight: 20
  },
  currentTemp: {
    color: '#fff',
    fontSize: 44,
    fontWeight: '300'
  },
  feelsLike: {
    color: '#fff',
    fontSize: 12
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 40
  },
  bottomViewLeft: {
    flex: 1,
    flexDirection: 'row'
  },
  bottomViewToday: {
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 6
  },
  bottomViewTodayDate: {
    color: '#fff'
  },
  bottomViewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  low: {
    color: '#fff',
    marginRight: 10,
    fontSize: 18,
    fontWeight: '300'
  },
  high: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18
  }
});

module.exports = Header;
