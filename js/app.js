/**
 * @flow
 */

'use strict';

import StatusBar from 'StatusBar';
import React, {
  Component,
  StyleSheet,
  View
} from 'react-native';

import { connect } from 'react-redux';

import Header from './components/header';
import Forecast from './components/forecast';

import { getAllWeather } from './actions';

type Props = {
  dispatch: any;
};

class App extends Component {
  props: Props;

  componentDidMount() {
    this.props.dispatch(getAllWeather());
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent={true}
          backgroundColor='transparent'
          barStyle='light-content'/>
          <Header>
            <Forecast />
          </Header>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});

module.exports = connect(() => {
  return {};
})(App);
