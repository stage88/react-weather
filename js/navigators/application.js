/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import Weather from '../components/weather';
import Settings from '../components/settings/settings';
import Locations from '../components/settings/locations';
import SettingsNavigator from '../navigators/settings';

type Props = {};

class ApplicationNavigator extends Component {
  constructor(props: Props) {
    super(props);

    (this: any).renderScene = this.renderScene.bind(this);
  }

  render() {
    return (
      <Navigator
        ref='navigator'
        style={styles.container}
        configureScene={(route) => {
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  }

  push(route: any) {
    this.refs.navigator.push(route);
  }

  pop() {
    this.refs.navigator.pop();
  }

  renderScene(route: any, navigator: Navigator) {
    if (route.settings) {
      return (
        <SettingsNavigator navigator={navigator} route={{
          title: 'Settings',
          component: Settings
        }} />
      );
    }

    if (route.locations) {
      return (
        <SettingsNavigator navigator={navigator} route={{
          title: 'Locations',
          component: Locations
        }} />
      );
    }

    return (
      <Weather navigator={this} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  }
});

module.exports = ApplicationNavigator;
