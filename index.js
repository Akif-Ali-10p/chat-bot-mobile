/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './Login';
import MainPage from './MainPage';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => MainPage);