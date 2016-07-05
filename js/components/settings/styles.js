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
  sectionTitle: {
    paddingLeft: 14,
    paddingBottom: 8
  },
  sectionTitleText: {
    paddingTop: 36,
    color: '#6D6D72',
    fontSize: 12
  },
  section: {
    backgroundColor: '#fff',
    borderColor: '#C8C7CC',
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5
  },
  separator: {
    height: 0.5,
    backgroundColor: '#C8C7CC',
    marginLeft: 14
  },
  navigationButtonRow: {
    height: 44,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  navigationButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 14,
    paddingLeft: 14
  },
  navigationButtonText: {
    fontSize: 16
  },
  listItem: {
    backgroundColor: '#fff',
    borderColor: '#C8C7CC',
    borderBottomWidth: 0.3,
  }
});

module.exports = styles;
