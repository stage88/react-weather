/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

class Separator extends Component {
  render() {
    return (
      <View style={styles.separator} />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#C8C7CC',
    marginLeft: 14
  },
});

module.exports = Separator;