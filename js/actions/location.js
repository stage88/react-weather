/**
 * @flow
 */

'use strict';

import type { Action } from './types';
import { getAllWeather } from './weather';

import LocationService from '../services/location';
const service = new LocationService();

function initaliseLocations() {
  return (dispatch: any) => {
    service.initialise().then(
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
