/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  NavigatorIOS,
  Navigator,
  View,
  Platform,
  ToolbarAndroid,
  StatusBar,
  BackAndroid
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Settings from '../components/settings/settings';

type Props = {
  route: any;
  navigator: any;
};
type State = {
  backIcon: any;
};

class SettingsNavigator extends Component {
  props: Props;
  state: State;

  constructor(props: Props) {
    super(props);

    this.state = {
      backIcon: null
    };
  }

  componentWillMount() {
    Icon.getImageSource('ios-close', 40, '#007AFF').then(
      (source) => this.setState({ backIcon: source })
    );
  }

  render() {
    if (!this.state.backIcon) {
      return null;
    }

    if(Platform.OS === 'android') {
      var ChildComponent = this.props.route.component;

      return (
        <View style={{flexDirection: 'column', backgroundColor:'white', flex:1}}>
        <StatusBar barStyle='default' backgroundColor='#000' />
        <ToolbarAndroid
          title={this.props.route.title}
          style={{height: 56, marginTop:24}}
          />
          <ChildComponent navigator = {this.props.navigator}
          />
          </View>
      );
    }
    return (
      <NavigatorIOS
        ref="navigator"
        itemWrapperStyle={styles.content}
        style={styles.container}
        initialRoute={{
          ...this.props.route,
          leftButtonTitle: '',
          leftButtonIcon: this.state.backIcon,
          onLeftButtonPress: this.props.navigator.pop,
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
    flex: 1
  }
});

module.exports = SettingsNavigator;
