/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

type Props = {
  text: string;
};

class SectionTitle extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.sectionTitle}>
        <Text style={styles.sectionTitleText}>{ this.props.text }</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sectionTitle: {
    paddingLeft: 14,
    paddingBottom: 8
  },
  sectionTitleText: {
    paddingTop: 36,
    color: '#6D6D72',
    fontSize: 12
  },
});

module.exports = SectionTitle;