/**
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import { Image } from 'react-native';

function renderForecastImage(icon: string, width: number, height: number) {
  var image: number;
  switch (icon) {
    case '01d':
    case '01n':
      image = require('./img/sunny.png');
      break;
    case '02d':
    case '02n':
      image = require('./img/sunny_s_cloudy.png');
      break;
    case '03d':
    case '03n':
      image = require('./img/partly_cloudy.png');
      break;
    case '04d':
    case '04n':
      image = require('./img/cloudy.png');
      break;
    case '09d':
    case '09n':
      image = require('./img/rain.png');
      break;
    case '10d':
    case '10n':
      image = require('./img/rain_s_cloudy.png');
      break;
    case '11d':
    case '11n':
      image = require('./img/thunderstorms.png');
      break;
    case '13d':
    case '13n':
      image = require('./img/snow.png');
      break;
    case '50d':
    case '50n':
      image = require('./img/fog.png');
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
