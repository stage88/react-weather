/**
 * @flow
 */

'use strict';

import type { Action } from './types';
import { getAllWeather } from './weather';
import LocationService from '../services/location';

function initaliseLocations() {
  return (dispatch: any) => {
    var locations = new LocationService();
    locations.initialise().then(
      (result) => {
        dispatch({
          type: 'LOCATION_INITIALISED'
        });
        dispatch(getAllWeather());
      }
    );
  };
}

module.exports = {
  initaliseLocations
};
