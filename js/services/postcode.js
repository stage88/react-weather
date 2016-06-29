/**
 * flow
 */

'use strict';

import realm from '../realm';
import { postcodeApiUrl } from '../config';

class PostcodeService {
  async getPostcodes(text: string) {
    var data = [];
    var postcodes = await this.getPostcodesFromApi(text);

    if (postcodes) {
      for (var i = 0; i < postcodes.length; i++) {
        var postcode = postcodes[i];
        var item = {
          name: postcode.name,
          postcode: postcode.postcode,
          state: postcode.state.abbreviation
        }

        data.push(item);
      }
    }

    return data;
  }

  async getPostcodesFromApi(text: string) {
    var url = `${postcodeApiUrl}?q=${text}`;

    try {
      let response = await fetch(url);
      const result = await response.json();

      return result;
    } catch(error) {
      // Handle error
      global.log(error);
    }
  }
}

module.exports = PostcodeService;
