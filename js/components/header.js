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
  Animated,
  Dimensions,
  RefreshControl
} from 'react-native';

import { connect } from 'react-redux';

import ParallaxScrollView from '../dependencies/parallaxview';

import { getAllWeather, setWeatherRefreshing } from '../actions';
import type { WeatherObservation, WeatherModel } from '../models/view';

const renderForecastImage = require('./forecastimage')

import dateFormat from 'dateformat';
const today = dateFormat(new Date(), 'ddd d mmmm');

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
  isLoading: bool;
  isRefreshing: bool;
  weather: Array<WeatherModel>;
  count: number;
  totalWidth: number;
  distanceToMiddle: number;
  children: ?any;
  offset: Animated.Value;
  current: Animated.Value;
  dispatch: any;
};

type State = {
  isRefreshing: bool;
  shift: Animated.Value;
};

const HEADER_HEIGHT = 290;
const TITLE_HEIGHT = 55;

class Header extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      isRefreshing: false,
      shift: new Animated.Value(0)
    };

    (this: any).onScroll = this.onScroll.bind(this);
    (this: any).renderTitle = this.renderTitle.bind(this);
    (this: any).renderHeader = this.renderHeader.bind(this);
    (this: any).renderRefreshControl = this.renderRefreshControl.bind(this);
    (this: any).onRefresh = this.onRefresh.bind(this);
  }

  componentWillReceiveProps(next: Props) {
    if (this.props.isRefreshing !== next.isRefreshing) {
      this.setState({
        isRefreshing: next.isRefreshing,
      });
    }
  }

  render() {
    const translateY = this.state.shift.interpolate({
      inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT / 2, HEADER_HEIGHT],
      outputRange: [-30, 0, 25, 30],
      extrapolate: 'clamp',
    });

    const transform = [{translateY}];

    return (
      <ParallaxScrollView
        backgroundColor='#589BC7'
        contentBackgroundColor='#F9F9F9'
        parallaxHeaderHeight={HEADER_HEIGHT}
        stickyHeaderHeight={TITLE_HEIGHT}
        showsVerticalScrollIndicator={false}
        onScroll={this.onScroll}
        refreshControl={this.renderRefreshControl()}
        renderStickyHeader={this.renderTitle}
        renderForeground={this.renderHeader}
        renderBackground={this.renderBackground}>
        <Animated.View style={[{transform}, styles.childrenView]}>
          { this.props.children }
        </Animated.View>
      </ParallaxScrollView>
    );
  }

  onScroll(e) {
    this.state.shift.setValue(e.nativeEvent.contentOffset.y);
  }

  renderBackground() {
    return (
      <Image source={require('./img/header-background.png')}/>
    );
  }

  renderTitle() {
    var items = this.props.weather.map((item, index) => {
      return this.renderTitleItem(item.observation, index);
    });

    return (
      <View style={{flexDirection: 'row'}}>
        { items }
      </View>
    );
  }

  renderTitleItem(observation: WeatherObservation, index: number) {
    var { count, totalWidth, distanceToMiddle } = this.props;
    var middle = index * SCREEN_WIDTH;

    var leftOffset = (middle - distanceToMiddle);
    var rightOffset = (middle + distanceToMiddle);

    const opacity = this.props.offset.interpolate({
      inputRange: [leftOffset, middle, rightOffset],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp',
    });

    const translateX = this.props.offset.interpolate({
      inputRange: [leftOffset - 1, leftOffset, middle, rightOffset, rightOffset + 1],
      outputRange: [(SCREEN_WIDTH * 2), (distanceToMiddle / 3), 0, -(distanceToMiddle / 3), -(SCREEN_WIDTH * 2)],
      extrapolate: 'clamp',
    });

    const transforms = { opacity, transform: [{translateX}] };

    return (
      <Animated.View key={`title-${index}`} style={[transforms, styles.titleViewAnimated]}>
        <View style={styles.stickyHeaderView}>
          <Text style={styles.stickyHeaderLocation}>
            { observation.location }
          </Text>
          <Text style={styles.stickyHeaderToday}>{ today }</Text>
        </View>
      </Animated.View>
    );
  }

  renderHeader() {
    var items = this.props.weather.map((item, index) => {
      return this.renderHeaderItem(item.observation, index);
    });

    return (
      <View style={{flexDirection: 'row'}}>
        { items }
      </View>
    );
  }

  renderHeaderItem(observation: WeatherObservation, index: number) {
    var { count, totalWidth, distanceToMiddle } = this.props;
    var middle = index * SCREEN_WIDTH;

    var leftOffset = (middle - distanceToMiddle);
    var rightOffset = (middle + distanceToMiddle);

    // global.log({
    //   leftOffset: leftOffset,
    //   middle: middle,
    //   rightOffset: rightOffset,
    //   count: count,
    // });

    const opacity = this.props.offset.interpolate({
      inputRange: [leftOffset, middle, rightOffset],
      outputRange: [0, 1, 0],
      extrapolate: 'clamp',
    });

    const translateX = this.props.offset.interpolate({
      inputRange: [leftOffset - 1, leftOffset, middle, rightOffset, rightOffset + 1],
      outputRange: [(SCREEN_WIDTH * 2), (distanceToMiddle / 3), 0, -(distanceToMiddle / 3), -(SCREEN_WIDTH * 2)],
      extrapolate: 'clamp',
    });

    const transforms = { opacity, transform: [{translateX}] };

    return (
      <Animated.View key={`header-${index}`} style={[transforms, styles.headerViewAnimated]}>
        <View style={styles.headerView}>
          <View>
            <Text style={styles.location}>{ observation.location }</Text>
            <Text style={styles.forecast}>{ observation.forecast }</Text>
          </View>
          <View style={styles.centerView}>
            <View style={styles.centerImageView}>
              { renderForecastImage(observation.icon, 100, 100) }</View>
            <View>
              <Text style={styles.currentTemp}>{ observation.current + '\u00B0'}</Text>
              <Text style={styles.feelsLike}>Feels like { observation.feelsLike }</Text>
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
              <Text style={styles.low}>{ observation.low }</Text>
              <Text style={styles.high}>
                { observation.high }
              </Text>
            </View>
          </View>
        </View>
      </Animated.View>
    );
  }

  onRefresh() {
    this.props.dispatch(setWeatherRefreshing());
    this.props.dispatch(getAllWeather());
  }

  renderRefreshControl() {
    return (
      <RefreshControl
        refreshing={this.state.isRefreshing}
        onRefresh={this.onRefresh}
        tintColor='#fff'
        title='Loading...'
        titleColor='#ffffff'
        colors={['#fff', '#eee', '#ddd']}
        progressBackgroundColor='transparent'
      />
    );
  }
}

const styles = StyleSheet.create({
  headerViewAnimated: {
    width: SCREEN_WIDTH,
    position: 'absolute'
  },
  titleViewAnimated: {
    width: SCREEN_WIDTH,
    position: 'absolute'
  },
  headerView: {
    marginRight: 5,
    marginLeft: 5
  },
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
    fontSize: 16,
    marginRight: 6
  },
  stickyHeaderToday: {
    color: '#fff',
    fontSize: 16
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
    fontSize: 64,
    fontWeight: '200'
  },
  feelsLike: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500'
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
    marginRight: 6,
    fontSize: 16
  },
  bottomViewTodayDate: {
    color: '#fff',
    fontSize: 16
  },
  bottomViewRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  low: {
    color: '#fff',
    marginRight: 12,
    fontSize: 18,
    fontWeight: '300',
    width: 22,
    textAlign: 'right',
  },
  high: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    width: 24,
    textAlign: 'right',
  },
  childrenView: {
    top: -30
  }
});

function select(store: any, props: Props): Props {
  return {
    isLoading: store.weather.isLoading,
    isRefreshing: store.weather.isRefreshing,
    weather: store.weather.data,
    count: store.weather.data.length,
    totalWidth: SCREEN_WIDTH * store.weather.data.length,
    distanceToMiddle: SCREEN_WIDTH / 2,
    ...props
  };
}

module.exports = connect(select)(Header);
