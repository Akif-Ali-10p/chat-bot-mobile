import React, { useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    Button,
    TextInput,
    TouchableHighlight
  } from 'react-native';
import Google from './googleSignIn';
import Facebook from './facebookSignIn';


const App = () => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.h1}>Welcome!</Text>
            <Text style = {{...styles.h2, marginBottom: 30}}>Sign in</Text>
            <TextField text = 'username'/>
            <TextField text = 'password'/>
            <TouchableHighlight onPress={console.log('Login')} style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableHighlight>
            <Text style = {styles.h3}>OR</Text>
            <Google/>
            <Facebook/>
        </View>
      );
  };

  const TextField = (props) => {
    return (
      <TextInput
        style={styles.textfield}
        placeholder = {props.text}
      />
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    h1: {
        fontWeight: '700',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 40,
        fontFamily: 'sans-serif-condensed'
      },
    h2: {
        fontWeight: '700',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 28,
        fontFamily: 'sans-serif'
      },
    h3: {
      fontWeight: '700',
      marginBottom: 20,
      fontSize: 18,
      fontFamily: 'sans-serif'
    },
    textfield: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingHorizontal: 15,
      marginBottom: 20,
      width: '80%',
      height: 50
    },
    button: {
      elevation: 5,
      backgroundColor: "#525DFA",
      borderRadius: 8,
      paddingVertical: 12,
      paddingHorizontal: 10,
      width: 120,
      height: 50,
      marginTop: 10,
      marginBottom: 20
    },
    buttonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});

export default App;