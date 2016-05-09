/**
 * @flow
 */

'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image
} from 'react-native';

import ParallaxScrollView from './components/parallaxview';

var dateFormat = require('dateformat');
const today = dateFormat(new Date(), 'ddd d mmmm');

class Header extends Component {
  props: {
    location: string,
    forecast: string,
    feelsLike: string,
    current: string,
    low: string,
    high: string
  };

  constructor(props) {
    super(props);

    this.renderStickyHeader = this.renderStickyHeader.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
  }

  render() {
    return (
      <ParallaxScrollView
        backgroundColor="#589BC7"
        contentBackgroundColor="#F9F9F9"
        parallaxHeaderHeight={260}
        stickyHeaderHeight={55}
        showsVerticalScrollIndicator={false}
        renderStickyHeader={this.renderStickyHeader}
        renderForeground={this.renderHeader}
        renderBackground={this.renderBackground}>
        { this.props.children }
      </ParallaxScrollView>
    );
  }

  renderBackground() {
    return (
      <Image source={require('../img/header-background.png')}/>
    );
  }

  renderStickyHeader() {
    return (
      <View style={{paddingTop: 24, paddingLeft: 12, flexDirection: 'row'}}>
        <Text style={{color: '#fff', fontWeight: 'bold', marginRight: 6}}>
          { this.props.location }
        </Text>
        <Text style={{color: '#fff'}}>{ today }</Text>
      </View>
    );
  }

  renderHeader() {
    return (
      <View>
        <View>
          <Text style={styles.location}>{ this.props.location }</Text>
          <Text style={styles.forecast}>{ this.props.forecast }</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
          <Image style={{width: 100, height: 100, marginRight: 20}} source={require('../img/sunny_s_cloudy.png')} />
          <View>
            <Text style={{color: '#fff', fontSize: 44, fontWeight: '300'}}>{ this.props.current + '\u00B0'}</Text>
            <Text style={{color: '#fff', fontSize: 12}}>Feels like { this.props.feelsLike }</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingLeft: 12, paddingRight: 12, marginTop: 40}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontWeight: 'bold', marginRight: 6}}>
              Today
            </Text>
            <Text style={{color: '#fff'}}>{ today }</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={{color: '#fff', marginRight: 6, fontSize: 18, fontWeight: '300'}}>{ this.props.low }</Text>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 18}}>
              { this.props.high }
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  location: {
    fontSize: 20,
    textAlign: 'center',
    paddingTop: 40,
    color: '#fff'
  },
  forecast: {
    fontSize: 12,
    textAlign: 'center',
    paddingTop: 3,
    color: '#fff'
  }
});

module.exports = Header;
