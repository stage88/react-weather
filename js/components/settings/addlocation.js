/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import defaultStyles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

class AddLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.searchView}>
          <View style={styles.searchInnerView}>
            <Icon name='ios-search' size={16} color='#8E8E94' />
            <Text style={styles.searchTextPlaceholder}>Search</Text>
          </View>
        </View>
      </View>
    );
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
    padding: 8
  },
  searchInnerView: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchTextPlaceholder: {
    color: '#8E8E94',
    fontSize: 12,
    marginLeft: 8
  }
});

module.exports = AddLocation;
