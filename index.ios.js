
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './src/components/Splash'
import Login from './src/components/Login'

export default class Clubs extends Component {
  render() {
    return (
        <Login />
    );
  }
}

AppRegistry.registerComponent('Clubs', () => Clubs);
