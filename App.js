import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from './screens/Home';
import Auth from './screens/Auth';
import More from './screens/More';
import Booking from './screens/Booking';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} hideNavBar={true} />
          <Scene key="more" component={More} hideNavBar={true} />
          <Scene key="booking" component={Booking} hideNavBar={true} />
          <Scene key="auth" component={Auth} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
