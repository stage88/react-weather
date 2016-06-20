/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight,
  ActionSheetIOS
} from 'react-native';

import { connect } from 'react-redux';

import defaultStyles from './styles';
import { clearAllLocationData } from '../../actions';

type Props = {
  dispatch: any;
  navigator: any;
};

class AboutSettings extends Component {
  props: any;

  constructor(props: any) {
    super(props);

    (this: any).clearAllData = this.clearAllData.bind(this);
  }

  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 44}}>About</Text>
        <TouchableHighlight style={[defaultStyles.redButton, {marginTop: 20}]} onPress={this.clearAllData}>
          <Text style={defaultStyles.buttonText}>Clear all data</Text>
        </TouchableHighlight>
      </View>
    );
  }

  clearAllData() {
    ActionSheetIOS.showActionSheetWithOptions({
      message: 'Are you sure you want to delete all app data?',
      options: [
        'Delete',
        'Cancel'
      ],
      cancelButtonIndex: 1,
      destructiveButtonIndex: 0,
    },
    (buttonIndex) => {
      if(buttonIndex === 0) {
        this.props.dispatch(clearAllLocationData());
        this.props.navigator.close();
      }
    });
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

module.exports = connect()(AboutSettings);
