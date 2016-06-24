/**
 * @flow
 */

'use strict';

import { connect } from 'react-redux';

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  ScrollView
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import defaultStyles from './styles';
import { getAllLocations } from '../../actions/location';
import type { Location } from '../../models/view';
import AddLocation from './addlocation';

const renderForecastImage = require('../forecastimage')

type Props = {
  navigator: any;
  dispatch: any;
  locations: Array<Location>;
  count: number;
};

class Locations extends Component {
  props: Props;

  constructor(props: Props) {
    super(props);

    (this: any).close = this.close.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(getAllLocations());
  }

  render() {
    var locations = this.props.locations.map((item) => {
      return (
        <View key={item.openWeatherId} style={styles.locationRow}>
          <View style={styles.locationLeft}>
            <Text style={styles.locationNameText}>{ item.name }</Text>
            <Text style={styles.locationCurrentText}>{ item.observation.current + '\u00B0' }</Text>
          </View>
          <View style={styles.locationRight}>
            <View style={{justifyContent: 'center', flexDirection: 'row'}}>
              { renderForecastImage(item.observation.icon, 20, 20) }
              <Text style={styles.locationTextLow}>{ item.observation.low }</Text>
              <Text style={styles.locationTextHigh}>{ item.observation.high }</Text>
            </View>
          </View>
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' backgroundColor='#000' />
        <ScrollView style={{flexDirection: 'column'}}>

          { locations }

          <View style={[defaultStyles.section, {marginTop: 36}]}>
            <TouchableHighlight
              style={defaultStyles.navigationButtonRow}
              underlayColor='#C8C7CC'
              onPress={() => this.props.navigator.navigateTo({
                title: 'Add Location',
                component: AddLocation
              })}>
              <View style={defaultStyles.navigationButtonView}>
                <Text style={defaultStyles.navigationButtonText}>Add Location</Text>
                <Icon name='ios-arrow-forward' size={20} color='#C7C7CC' />
              </View>
            </TouchableHighlight>
          </View>
        </ScrollView>
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
    backgroundColor: '#f8f8f8'
  },
  locationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    paddingLeft: 14,
    paddingRight: 14,
    height: 72,
    borderColor: '#C8C7CC',
    borderBottomWidth: 0.3
  },
  locationLeft: {
    flex: 1,
    justifyContent: 'center'
  },
  locationNameText: {
    fontSize: 16
  },
  locationCurrentText: {
    fontSize: 16,
    color: '#B0B5BF'
  },
  locationRight: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row'
  },
  locationTextLow: {
    textAlign: 'right',
    marginLeft: 14,
    width: 20,
    color: '#B0B5BF',
    fontSize: 16
  },
  locationTextHigh: {
    textAlign: 'right',
    marginLeft: 14,
    width: 20,
    fontSize: 16
  }
});

function select(store: any, props: Props) {
  return {
    isRefreshing: store.weather.isRefreshing,
    locations: store.location.data,
    count: store.location.data.length,
    ...props
  };
}

module.exports = connect(select)(Locations);
