/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase'

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
    }
  }
  buttonTapped = () => {

  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.header}>Welcome!</Text>
        </View>

        <View style={styles.loginContainer}>

          <TextInput placeholder='E-Mail'
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='email-address'
          style={styles.loginInput}></TextInput>
          <TextInput placeholder='Password'
          secureTextEntry
          style={styles.loginInput}></TextInput>
          <TouchableOpacity
          style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: 'black',
  },
  headerContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 35,
  },
  loginContainer: {
    flexGrow: 1,
    alignItems: 'center',
  },
  loginInput: {
    height: 30,
    backgroundColor: 'white',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: 'rgba(255,255,255, 0.7)',
    width: 100,
    paddingVertical: 30
  },
  buttonText: {
    textAlign: 'center',
  }
});
