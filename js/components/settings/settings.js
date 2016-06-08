/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import AboutSettings from './about';

type Props = {
  navigator: any;
};

class Settings extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).close = this.close.bind(this);
    (this: any).navigate = this.navigate.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' backgroundColor='#000' />
        <TouchableHighlight style={[styles.button, {marginTop: 300}]} onPress={this.navigate}>
          <Text style={styles.buttonText}>About</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.button, {marginTop: 20}]} onPress={this.close}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableHighlight>
      </View>
    );
  }

  navigate() {
    this.props.navigator.push({
      title: "About",
      component: AboutSettings,
      passProps: {
        navigator: this.props.navigator
      }
    });
  }

  close() {
    this.props.navigator.close();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 200,
    height: 35,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  }
});

module.exports = Settings;
