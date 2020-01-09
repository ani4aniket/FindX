import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from './screens/Welcome';
import Gallery from './screens/Gallery';

var RootScreen = 'Welcome';
const AppNavigator = createStackNavigator(
  {
    Welcome: Welcome,
    Gallery: Gallery
  },
  {
    initialRouteName: RootScreen,
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(AppNavigator);
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcomeScreen: true,
    };
  }

  render() {
    return <AppContainer />;
  }
}
