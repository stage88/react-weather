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
  TouchableHighlight
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import Pager from './pager';
import Settings from './settings/settings';

type Props = {
  current: number;
  count: number;
  navigator: any;
};

class Footer extends Component {
  constructor(props: Props) {
    super(props);

    (this: any).navigateToSettings = this.navigateToSettings.bind(this);
    (this: any).navigateToLocations = this.navigateToLocations.bind(this);
  }

  render() {
    return (
      <View style={styles.footer}>
        <View style={styles.left}>
          <TouchableHighlight onPress={this.navigateToLocations} style={{width: 20}} underlayColor='transparent'>
            <Icon name='ios-list' size={35} color='#8F97A4' />
          </TouchableHighlight>
        </View>
        <View style={styles.center}>
          <Pager current={this.props.current} count={this.props.count} />
        </View>
        <View style={styles.right}>
          <TouchableHighlight onPress={this.navigateToSettings} underlayColor='transparent'>
            <Icon name='ios-settings-outline' size={25} color='#8F97A4' />
          </TouchableHighlight>
        </View>
      </View>
    );
  }

  navigateToSettings() {
    this.props.navigator.push({
      settings: true
    });
  }

  navigateToLocations() {
    this.props.navigator.push({
      locations: true
    });
  }
}

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 40,
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#c4c4c4'
  },
  left: {
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});

module.exports = Footer;
