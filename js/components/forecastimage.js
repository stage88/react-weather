/**
 * @flow
 */

'use strict';

import React, {
  Image
} from 'react-native';

function renderForecastImage(forecast: string, width: number, height: number) {
  switch (forecast) {
    case 'Sunny':
      var image = require('./img/sunny.png');
      break;
    case 'Clear':
      var image = require('./img/sunny.png');
      break;
    case 'Partly Cloudy':
      var image = require('./img/partly_cloudy.png');
      break;
    default:
      var image = null;
      break
  }

  const imageStyle = {
    width: width,
    height: height
  };

  return (
    <Image style={imageStyle} source={image} />
  );
}

module.exports = renderForecastImage;
