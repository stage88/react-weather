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

import Header from './header';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0)"
          barStyle="light-content"/>
        <Header location='Canberra' forecast='Clear' feelsLike='7.9' current='9.1' low='3.2' high='15'>
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
        </Header>
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
