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
  TouchableOpacity,
  TextInput,
  LayoutAnimation
} from 'react-native';

import defaultStyles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

type State = {
  isSearchActive: bool;
};

class AddLocation extends Component {
  state: State;

  constructor() {
    super();

    this.state = {
      isSearchActive: false
    };

    (this: any).onSearchBarPressed = this.onSearchBarPressed.bind(this);
    (this: any).onSearchBarCancelPressed = this.onSearchBarCancelPressed.bind(this);
  }

  render() {
    var iconStyle = {};
    var textInputStyle = {width: 56};
    var isTextInputEditable = false;
    var cancelTouchableStyle = {width: 0, height: 0};

    if (this.state.isSearchActive) {
      iconStyle = {marginLeft: 8};
      textInputStyle = {flex: 1};
      isTextInputEditable = true;
      cancelTouchableStyle = {marginLeft: 8};
    }

    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <TouchableHighlight style={styles.searchBarTouchable} onPress={this.onSearchBarPressed} underlayColor='transparent'>
            <View style={styles.searchInnerView}>
              <Icon style={iconStyle} name='ios-search' size={16} color='#8E8E94' />
              <TextInput style={[textInputStyle, styles.searchBarTextInput]} editable={isTextInputEditable} placeholder='Search' placeholderTextColor='#8E8E94'></TextInput>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={[cancelTouchableStyle, styles.searchBarCancelTouchable]} onPress={this.onSearchBarCancelPressed}>
            <Text style={styles.searchBarCancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  onSearchBarPressed() {
    LayoutAnimation.spring();
    this.setState({
      isSearchActive: true
    });
  }

  onSearchBarCancelPressed() {
    LayoutAnimation.spring();
    this.setState({
      isSearchActive: false
    });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f8f8f8',
    marginTop: 64,
  },
  searchView: {
    backgroundColor: '#C9C9CE',
    height: 44,
    padding: 8,
    flexDirection: 'row'
  },
  searchInnerView: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchBarTouchable: {
    flex: 1
  },
  searchBarTextInput: {
    marginLeft: 8,
    fontSize: 14
  },
  searchBarCancelTouchable: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  searchBarCancelText: {
    color: '#0078FF',
    fontSize: 16
  }
});

module.exports = AddLocation;
