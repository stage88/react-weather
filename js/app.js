/**
 * @flow
 */

'use strict';

import StatusBar from 'StatusBar';
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ApplicationNavigator from './navigators/application';

class App extends Component {
  render() {
    if (this.props.isLoading === true) {
      return (
        <View style={styles.loadingView}>
          <Text style={styles.loadingText}>Loading...</Text>
          <Image source={require('./components/img/sunny.gif')} />
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
        scrollEventThrottle={30}>
        { forecastItems }
      </Swiper>
    );
    return (
      <View style={styles.container}>
        <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
        <ApplicationNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = App;
