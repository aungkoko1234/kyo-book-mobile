/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import Welcome from './screens/Welcome';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();
import {name as appName} from './app.json';

const RNApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNApp);
