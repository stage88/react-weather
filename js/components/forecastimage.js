/**
 * @flow
 */

'use strict';

import React, {
  Image
} from 'react-native';

function renderForecastImage(forecast: string, width: number, height: number) {
  var image: number;
  switch (forecast) {
    case 'Sunny':
      image = require('./img/sunny.png');
      break;
    case 'Clear':
      image = require('./img/sunny.png');
      break;
    case 'Partly Cloudy':
      image = require('./img/partly_cloudy.png');
      break;
    case 'Rain':
      image = require('./img/rain.png');
      break;
    case 'Mostly Sunny':
      image = require('./img/sunny_s_cloudy.png');
      break;
    case 'Cloudy':
      image = require('./img/cloudy.png');
      break;
    case 'Possible Shower':
      image = require('./img/rain_s_cloudy.png');
      break;
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
