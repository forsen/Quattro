import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import firebase from '../firebase';
import { username, password } from '../config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const Quattro = () => {
  firebase.auth().signInWithEmailAndPassword(username, password)
    .then(() => {
      firebase.database()
        .ref('posts/1234')
        .set({
          title: 'My awesome post',
          content: 'Some awesome content',
        });
    });

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit index.ios.js</Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu,
        Dette er en tulball
      </Text>
    </View>
  );
};

export default Quattro;
