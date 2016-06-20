/**
 * @flow
 */

'use strict';

import StatusBar from 'StatusBar';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Image,
  Text,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';
import Swiper from '../dependencies/swiper';

import Header from './header';
import Footer from './footer';
import Forecast from './forecast';

import type { WeatherModel } from '../models/view'

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
  dispatch: any;
  isLoading: bool;
  weather: Array<WeatherModel>;
  count: number;
  navigator: any;
};

type State = {
  shift: Animated.Value;
  current: number;
};

class Weather extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      shift: new Animated.Value(0),
      current: 0
    };

    (this: any).onScroll = this.onScroll.bind(this);
    (this: any).renderPagination = this.renderPagination.bind(this);
    (this: any).onSelectedIndexChange = this.onSelectedIndexChange.bind(this);
  }

  render() {
    if (this.props.isLoading === true) {
      return (
        <View style={styles.loadingView}>
          <View style={styles.loadingHeader}>
            <Text style={styles.loadingText}>Loading...</Text>
            <Image source={require('./img/sunny.gif')} />
          </View>
        </View>
      );
    }

    var forecastItems = this.props.weather.map((item, index) => {
      return (
        <Forecast key={`forecast-${index}`} forecast={item.forecast} />
      );
    });

    var swiper = (
      <Swiper
        showsPagination={true}
        loop={false}
        onScroll={this.onScroll}
        renderPagination={this.renderPagination}
        onSelectedIndexChange={this.onSelectedIndexChange}
        scrollEventThrottle={8}>
        { forecastItems }
      </Swiper>
    );

    return (
      <View style={styles.container}>
        <Header offset={this.state.shift} current={this.state.current}>
          { swiper }
        </Header>
        <Footer
          current={this.state.current}
          count={this.props.count}
          navigator={this.props.navigator} />
      </View>
    );
  }

  onSelectedIndexChange(index, offset) {
    this.setState({current: index})
  }

  renderPagination(index, state, context) {
    return null;
  }

  onScroll(e) {
    this.state.shift.setValue(e.nativeEvent.contentOffset.x);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  loadingView: {
    backgroundColor: '#fff',
    flex: 1
  },
  loadingHeader: {
    height: 290,
    backgroundColor: '#589BC7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#fff',
    marginBottom: 18
  }
});

function select(store: any, props: Props) {
  return {
    isLoading: store.weather.isLoading,
    weather: store.weather.data,
    count: store.weather.data.length,
    ...props
  };
}

module.exports = connect(select)(Weather);
