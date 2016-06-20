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

function getAllLocations() {
  var result = service.getAllLocations();
  return {
    type: 'LOCATION_GET_ALL',
    data: result
  };
}

function clearAllLocationData() {
  return (dispatch: any) => {
    service.clearAllData()
    dispatch({
      type: 'LOCATION_CLEAR_ALL_DATA'
    });
    dispatch(initaliseLocations());
  };
}

module.exports = {
  initaliseLocations,
  getAllLocations,
  clearAllLocationData
};
