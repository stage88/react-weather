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
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' backgroundColor='#000' />
      
        <View style={styles.sectionTitle}>
          <Text style={styles.sectionTitleText}>HELP</Text>
        </View>

        <View style={styles.section}>
          <TouchableHighlight
            style={styles.navigationButtonRow}
            underlayColor='#C8C7CC'
            onPress={() => this.navigateTo({
              title: 'User Guide',
              component: UserGuide
            })}>
            <View style={styles.navigationButtonView}>
              <Text style={styles.navigationButtonText}>User Guide</Text>
              <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
            </View>
          </TouchableHighlight>

          <View style={styles.separator}></View>

          <TouchableHighlight
            style={styles.navigationButtonRow}
            underlayColor='#C8C7CC'
            onPress={() => this.navigateTo({
              title: 'About',
              component: AboutSettings,
            })}>
            <View style={styles.navigationButtonView}>
              <Text style={styles.navigationButtonText}>About</Text>
              <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
            </View>
          </TouchableHighlight>
        </View>

      </View>
    );
  }

  navigateTo(route: any) {
    this.props.navigator.push({
      ...route,
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
  },
  sectionTitle: {
    paddingLeft: 14,
    paddingBottom: 8
  },
  sectionTitleText: {
    paddingTop: 36,
    color: '#6D6D72',
    fontSize: 12
  },
  section: {
    backgroundColor: '#fff',
    borderColor: '#C8C7CC',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  separator: {
    height: 0.5,
    backgroundColor: '#C8C7CC',
    marginLeft: 14
  },
  navigationButtonRow: {
    height: 44,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  navigationButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 14,
    paddingLeft: 14
  },
  navigationButtonText: {
    fontSize: 16
  }
});

module.exports = Settings;
