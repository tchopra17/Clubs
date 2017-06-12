import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   Text
} from 'react-native';
export default class Splash extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.text}>Clubs</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 35,
    color: 'yellow',
  }
});
