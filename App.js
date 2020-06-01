import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Home from './screens/Home';
import Auth from './screens/Auth';
import More from './screens/More';
import Booked from './screens/Booked';
import Booking from './screens/Booking';
import BookingDetail from './screens/BookingDetail';
import RestaurantMenu from './screens/RestaurantMenu';
import Welcome from './screens/Welcome';
import LoginNew from './screens/LoginNew';
import RegisterNew from './screens/RegisterNew';
import {Actions} from 'react-native-router-flux';
export default class App extends Component {
  render() {
    return (
      <Router backAndroidHandler={() => Actions.pop()}>
        <Stack key="root">
          <Scene key="welcome" component={Welcome} hideNavBar={true} />
          <Scene key="home" component={Home} hideNavBar={true} />
          <Scene key="more" component={More} hideNavBar={true} />
          <Scene key="booking" component={Booking} hideNavBar={true} />
          <Scene key="auth" component={Auth} hideNavBar={true} />
          <Scene key="newlogin" component={LoginNew} hideNavBar={true} />
          <Scene key="booknow" component={BookingDetail} hideNavBar={true} />
          <Scene key="booked" component={Booked} hideNavBar={true} />
          <Scene key="showmenu" component={RestaurantMenu} hideNavBar={true} />
          <Scene key="newregister" component={RegisterNew} hideNavBar={true} />
          <Scene
            key="restaurantmenu"
            component={RestaurantMenu}
            hideNavBar={true}
          />
          <Scene key="more" component={More} hideNavBar={true} />
        </Stack>
      </Router>
    );
  }
}
