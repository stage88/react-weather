/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import SectionTitle from './sectiontitle';
import Section from './section';
import Separator from './separator';
import NavigationButtonRow from './navigationbuttonrow';
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
        <SectionTitle text={'HELP'} />

        <Section>
          <NavigationButtonRow text={'User Guide'} component={UserGuide} navigator={this.props.navigator} />
          <Separator  />
          <NavigationButtonRow text={'About'} component={AboutSettings} navigator={this.props.navigator} />
        </Section>
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
