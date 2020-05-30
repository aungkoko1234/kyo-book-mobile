/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import register from './register';
import login from './login';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
