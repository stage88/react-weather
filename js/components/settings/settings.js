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
import UserGuide from './userguide';

type Props = {
  navigator: any;
};

class Settings extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).close = this.close.bind(this);
    (this: any).navigateToUserGuide = this.navigateToUserGuide.bind(this);
    (this: any).navigateToAbout = this.navigateToAbout.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' backgroundColor='#000' />
        <View style={{paddingLeft: 14, paddingBottom: 8}}>
          <Text style={{paddingTop: 36, color: '#6D6D72', fontSize: 12}}>HELP</Text>
        </View>

        <View style={{backgroundColor: '#fff', borderColor: '#C8C7CC', borderTopWidth: 0.5, borderBottomWidth: 0.5}}>
          <TouchableHighlight style={{height: 44, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff'}} onPress={this.navigateToUserGuide} underlayColor='#C8C7CC'>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 14, paddingLeft: 14}}>
              <Text style={{fontSize: 16}}>User Guide</Text>
              <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
            </View>
          </TouchableHighlight>

          <View style={{height: 0.5, backgroundColor: '#C8C7CC', marginLeft: 14}}></View>

          <TouchableHighlight style={{height: 44, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#fff'}} onPress={this.navigateToAbout} underlayColor='#C8C7CC'>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingRight: 14, paddingLeft: 14}}>
              <Text style={{fontSize: 16}}>About</Text>
              <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  navigateToUserGuide() {
    this.props.navigator.push({
      title: "User Guide",
      component: UserGuide,
      passProps: {
        navigator: this.props.navigator
      }
    });
  }

  navigateToAbout() {
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
    backgroundColor: '#f8f8f8',
    marginTop: 64,
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
