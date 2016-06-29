/**
 * @flow
 */

'use strict';

import type { Action } from './types';

import PostcodeService from '../services/postcode';
const service = new PostcodeService();

async function searchPostcodes(text: string) {
  var result = await service.getPostcodes(text);
  return {
    type: 'POSTCODE_SEARCH',
    data: result
  };
}

function clearPostcodes() {
  return {
    type: 'POSTCODE_CLEAR'
  }
}

module.exports = {
  searchPostcodes,
  clearPostcodes
};
