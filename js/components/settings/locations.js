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
  ScrollView,
  LayoutAnimation
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from '../../dependencies/swipeout';

import defaultStyles from './styles';
import { getAllLocations, deleteLocation } from '../../actions/location';
import type { Location } from '../../models/view';

import Section from './section'; 
import NavigationButtonRow from './navigationbuttonrow';
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
      var current = item.observation ? item.observation.current + '\u00B0' : "-";
      var low = item.observation ? item.observation.low : "-";
      var high = item.observation ? item.observation.high : "-";
      var icon = item.observation ? renderForecastImage(item.observation.icon, 20, 20) : null;

      return (
        <Swipeout
          key={item.openWeatherId}
          autoClose={true}
          right={[{text: 'Delete', backgroundColor: '#FF3B30', onPress: () => {
            this.props.dispatch(deleteLocation(item.openWeatherId))
          }}]}>
          <View style={styles.locationRow}>
            <View style={styles.locationLeft}>
              <Text style={styles.locationNameText}>{ item.name }</Text>
              <Text style={styles.locationCurrentText}>{ current }</Text>
            </View>
            <View style={styles.locationRight}>
              <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                { icon }
                <Text style={styles.locationTextLow}>{ low }</Text>
                <Text style={styles.locationTextHigh}>{ high }</Text>
              </View>
            </View>
          </View>
        </Swipeout>
      );
    });

    return (
      <View style={styles.container}>
        <StatusBar barStyle='default' backgroundColor='#000' />
        <ScrollView style={{flexDirection: 'column'}}>

          { locations }

          <Section style={{marginTop: 36}}>
            <NavigationButtonRow 
              text={'Add Location'} 
              component={AddLocation} 
              navigator={this.props.navigator} />
          </Section>
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
