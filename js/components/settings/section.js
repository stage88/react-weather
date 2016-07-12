/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

type Props = {
  children: any;
  style: any;
};

class Section extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.section, this.props.style]}>
        { this.props.children }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: '#fff',
    borderColor: '#C8C7CC',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
});

module.exports = Section;