
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Splash from './Splash';

export default class Clubs extends Component {
  render() {
    return (
      <Splash></Splash>
    );
  }
}

AppRegistry.registerComponent('Clubs', () => Clubs);
