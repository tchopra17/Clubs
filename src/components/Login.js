/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBYXNAawWH_EZi-gWlcBd5PXWswffc7q8k",
  authDomain: "club-eda9f.firebaseapp.com",
  databaseURL: "https://club-eda9f.firebaseio.com",
  projectId: "club-eda9f",
  storageBucket: "club-eda9f.appspot.com",
  messagingSenderId: "297879900058"
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      pass: '',
    }
  }
  createUser(email, password){
    auth.createUserWithEmailAndPassword(email, password).then((data) => {
      if (this.props.onLoginSuccess) {
        this.props.onLoginSuccess(data)
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (this.props.onLoginError) {
        this.props.onLoginError(error.code, error.message)
      }
    });
  }
  buttonTapped = () => {
    this.createUser(this.state.user, this.state.pass)
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
          onChangeText={(user) => this.setState({user})}
          value={this.state.user}
          style={styles.loginInput}></TextInput>
          <TextInput placeholder='Password'
          secureTextEntry
          onChangeText={(pass) => this.setState({pass})}
          style={styles.loginInput}></TextInput>
          <TouchableOpacity
          onPress={() => {this.buttonTapped() }}
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
