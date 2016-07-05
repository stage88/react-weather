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

function deleteLocation(openWeatherId: string) {
  return (dispatch: any) => {
    service.deleteLocation(openWeatherId);
    dispatch({
      type: 'LOCATION_DELETE'
    });
    dispatch(getAllLocations());
    dispatch(getAllWeather());
  };
}

function addLocation(name: string, postcode: string, state: string) {
  return (dispatch: any) => {
    service.addLocation(name, postcode, state).then(
      (result) => {
        dispatch({
          type: 'LOCATION_ADD'
        });
        dispatch(getAllLocations());
        dispatch(getAllWeather());
      }
    );
  };
}

module.exports = {
  initaliseLocations,
  getAllLocations,
  clearAllLocationData,
  deleteLocation,
  addLocation
};
