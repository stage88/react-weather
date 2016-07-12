/**
 * @flow
 */

'use strict';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 35,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  redButton: {
    width: 200,
    height: 35,
    backgroundColor: '#D0021B',
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  },
  listItem: {
    backgroundColor: '#fff',
    borderColor: '#C8C7CC',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

module.exports = styles;
