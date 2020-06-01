/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import register from './register';
import login from './login';
import profile from './profile';
import menu from './menu';
import booking from './booking';
import invite from './invite';
import booked from './booked';
import mybooking from './mybooking';
import welcome from './welcome';

import resmenu from './resmenu';
import resbookings from './resbookings';
import resapprove from './resapprove';
import resmore from './resmore';
import resRegister from './resRegister';
import resLogin from './resLogin';

import {name as appName} from './app.json';



AppRegistry.registerComponent(appName, () => welcome

);
