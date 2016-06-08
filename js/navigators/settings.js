/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  View
} from 'react-native';

import Settings from '../components/settings/settings';

type Props = {
  navigator: any;
};

class SettingsNavigator extends Component {
  render() {
    return (
      <NavigatorIOS
        ref="navigator"
        itemWrapperStyle={styles.content}
        style={styles.container}
        initialRoute={{
          title: "Settings",
          component: Settings,
          passProps: {
            navigator: this
          }
        }} />
    );
  }

  push(route: any) {
    this.refs.navigator.push(route);
  }

  close() {
    this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
  }
});

module.exports = SettingsNavigator;
