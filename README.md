# React Weather
A simple weather app built with React Native

# Inspiration 
I wanted to learn how to make apps using React Native. Instead of inventing an app, I wanted to try and see how hard would it be to implement one of my favourite weather apps: [Pocket Weather Australia](https://itunes.apple.com/au/app/pocket-weather-australia/id546266910?mt=8). Full credits for user experience goes to them.

The app architecture/structure is mostly based on ideas I've seen in the Facebook's F8 app. You can read more about it on their web site: http://makeitopen.com/.  

# Development Stack
+ [Flow](http://flowtype.org/) was enabled to catch typing errors in React Native JavaScript code
+ [Realm](https://realm.io/) for React Native is used to persist data
+ I used [Nuclide](http://nuclide.io/) and [Visual Studio Code](https://code.visualstudio.com/) on OSX, both have great support for React Native app development
+ I used git for version control, and stored progress on GitHub.
+ I develop on my old 13' Macbook Pro
 
# APIs
+ Weather data is retrieved from http://openweathermap.org/
+ Australia postcode and suburb data is retrieved from http://postcodeapi.com.au/
+ You can see examples of API data in [react-weather/api](https://github.com/stage88/react-weather/tree/master/api)

# External Packages
+ [react-native-parallax-scroll-view](https://github.com/jaysoo/react-native-parallax-scroll-view): A ScrollView-like component with parallax and sticky header support. I use a customised version of the component to modify behaviour of animations.
+ [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views): A React component for swipeable views

# Current Progress
Pocket Weather | React Weather
-------------- | --------------
<img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/screenshot1.png" width="300"> | <img src="https://raw.githubusercontent.com/stage88/react-weather/master/screenshots/Simulator%20Screen%20Shot%2016%20May%202016%2C%2023.26.37.png" width="300">

## Running

#### Clone & install

+ Clone this repo `git clone git@github.com:stage88/react-weather.git`
+ `cd react-weather`
+ run `npm install`

#### API keys
+ Get your API key from http://openweathermap.org/
+ No key is required to use http://postcodeapi.com.au/
+ Create a new file `release/keys.js`:
```jsx
module.exports = {
	weatherApiKey: 'YOUR_KEY_HERE'
}; 
```

#### iOS

+ Open `ReactWeather.xcodeproj` in `XCode`
+ Press `cmd+r` to build it

#### Android

+ Run `android avd` and start an emulator
+ Run `react-native run-android`

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).
