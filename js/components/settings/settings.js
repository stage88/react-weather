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

import defaultStyles from './styles';
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
        <View style={defaultStyles.sectionTitle}>
          <Text style={defaultStyles.sectionTitleText}>HELP</Text>
        </View>

        <View style={defaultStyles.section}>
          <TouchableHighlight
            style={defaultStyles.navigationButtonRow}
            underlayColor='#C8C7CC'
            onPress={() => this.props.navigator.navigateTo({
              title: 'User Guide',
              component: UserGuide
            })}>
            <View style={defaultStyles.navigationButtonView}>
              <Text style={defaultStyles.navigationButtonText}>User Guide</Text>
              <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
            </View>
          </TouchableHighlight>

          <View style={defaultStyles.separator}></View>

          <TouchableHighlight
            style={defaultStyles.navigationButtonRow}
            underlayColor='#C8C7CC'
            onPress={() => this.props.navigator.navigateTo({
              title: 'About',
              component: AboutSettings,
            })}>
            <View style={defaultStyles.navigationButtonView}>
              <Text style={defaultStyles.navigationButtonText}>About</Text>
              <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
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
  }
});

module.exports = Settings;
