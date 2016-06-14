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
