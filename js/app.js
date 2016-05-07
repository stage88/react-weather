/**
 * @flow
 */

'use strict';

var StatusBar = require('StatusBar');

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

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"/>
        <ParallaxScrollView
          backgroundColor="#2980B9"
          contentBackgroundColor="#F9F9F9"
          parallaxHeaderHeight={235}
          stickyHeaderHeight={55}
          showsVerticalScrollIndicator={false}
          renderStickyHeader={this.renderStickyHeader}
          renderForeground={this.renderHeader}
          renderBackground={this.renderBackground}>
          <View style={{flexDirection: 'row', height: 500}}>
            <View style={{flex: 1, backgroundColor: '#fff', borderColor: '#E2E2E2', paddingLeft: 12, paddingRight: 12}}>
              <View style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
                <View stye={{flex: 1}}>
                  <Text>Tomorrow</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image style={{width: 22, height: 22}} source={require('../img/rain_s_cloudy.png')} />
                  <Text style={{marginLeft: 12}}>9</Text>
                  <Text style={{marginLeft: 12}}>18</Text>
                </View>
              </View>
              <View style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
                <View stye={{flex: 1}}>
                  <Text>Tusday</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image style={{width: 22, height: 22}} source={require('../img/rain_s_cloudy.png')} />
                  <Text style={{marginLeft: 12}}>4</Text>
                  <Text style={{marginLeft: 12}}>17</Text>
                </View>
              </View>
              <View style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
                <View stye={{flex: 1}}>
                  <Text>Wednesday</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image style={{width: 22, height: 22}} source={require('../img/sunny.png')} />
                  <Text style={{marginLeft: 12}}>4</Text>
                  <Text style={{marginLeft: 12}}>15</Text>
                </View>
              </View>
              <View style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
                <View stye={{flex: 1}}>
                  <Text>Thursday</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image style={{width: 22, height: 22}} source={require('../img/sunny.png')} />
                  <Text style={{marginLeft: 12}}>8</Text>
                  <Text style={{marginLeft: 12}}>20</Text>
                </View>
              </View>
              <View style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
                <View stye={{flex: 1}}>
                  <Text>Friday</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image style={{width: 22, height: 22}} source={require('../img/rain_s_cloudy.png')} />
                  <Text style={{marginLeft: 12}}>2</Text>
                  <Text style={{marginLeft: 12}}>23</Text>
                </View>
              </View>
              <View style={{borderColor: '#F4F4F4', borderBottomWidth: 1, paddingTop: 6, paddingBottom: 6, flexDirection: 'row'}}>
                <View stye={{flex: 1}}>
                  <Text>Saturday</Text>
                </View>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                  <Image style={{width: 22, height: 22}} source={require('../img/rain_s_cloudy.png')} />
                  <Text style={{marginLeft: 12}}>10</Text>
                  <Text style={{marginLeft: 12}}>18</Text>
                </View>
              </View>
            </View>
          </View>
        </ParallaxScrollView>
      </View>
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
          Canberra
        </Text>
        <Text style={{color: '#fff'}}>Sat 7 May</Text>
      </View>
    );
  }

  renderHeader() {
    return (
      <View>
        <View>
          <Text style={styles.location}>Canberra</Text>
          <Text style={styles.forecast}>Clear</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingTop: 10}}>
          <Image style={{width: 100, height: 100, marginRight: 20}} source={require('../img/sunny_s_cloudy.png')} />
          <View>
            <Text style={{color: '#fff', fontSize: 44, fontWeight: '300'}}>{'4.6\u00B0'}</Text>
            <Text style={{color: '#fff', fontSize: 12}}>Feels like 3.2</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center', paddingLeft: 12, paddingRight: 12, marginTop: 15}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={{color: '#fff', fontWeight: 'bold', marginRight: 6}}>
              Today
            </Text>
            <Text style={{color: '#fff'}}>Sat 7 May</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
            <Text style={{color: '#fff', marginRight: 6, fontSize: 18, fontWeight: '300'}}>4</Text>
            <Text style={{color: '#fff', fontWeight: '500', fontSize: 18}}>
              23
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = App;
