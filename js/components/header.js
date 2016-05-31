/**
 * @flow
 */

'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Dimensions
} from 'react-native';

import { connect } from 'react-redux';

import ParallaxScrollView from '../dependencies/parallaxview';
import type { WeatherObservation, WeatherModel } from '../models/view';

const renderForecastImage = require('./forecastimage')

import dateFormat from 'dateformat';
const today = dateFormat(new Date(), 'ddd d mmmm');

const SCREEN_WIDTH = Dimensions.get('window').width;

type Props = {
  isLoading: bool;
  weather: Array<WeatherModel>;
  count: number;
  totalWidth: number;
  distanceToMiddle: number;
  children: ?any;
  offset: Animated.Value;
  current: Animated.Value;
};

const HEADER_HEIGHT = 290;
const TITLE_HEIGHT = 55;

class Header extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).renderTitle = this.renderTitle.bind(this);
    (this: any).renderHeader = this.renderHeader.bind(this);
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor='#589BC7'
        contentBackgroundColor='#F9F9F9'
        parallaxHeaderHeight={HEADER_HEIGHT}
        stickyHeaderHeight={TITLE_HEIGHT}
        showsVerticalScrollIndicator={false}
        renderStickyHeader={this.renderTitle}
        renderForeground={this.renderHeader}
        renderBackground={this.renderBackground}>
        <View style={styles.childrenView}>
          { this.props.children }
        </View>
      </ParallaxScrollView>
    );
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
    fontWeight: '300',
    width: 20,
    textAlign: 'right',
  },
  high: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 18,
    width: 20,
    textAlign: 'right',
  },
  childrenView: {
    top: -30
  }
});

function select(store): Props {
  return {
    isLoading: store.weather.isLoading,
    weather: store.weather.data,
    count: store.weather.data.length,
    totalWidth: SCREEN_WIDTH * store.weather.data.length,
    distanceToMiddle: SCREEN_WIDTH / 2,
  };
}

module.exports = connect(select)(Header);
