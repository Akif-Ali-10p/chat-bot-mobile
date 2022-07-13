import React, { useState, useEffect} from 'react';
import {
    View,
    StyleSheet,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableHighlight
  } from 'react-native';


const MainPage = () => {

    return (
        <View style = {styles.container}>
            <Text style = {styles.h1}>Welcome to Shopertino!</Text>
            <Text style = {{...styles.h2, marginBottom: 30}}>
                Shop & get updates on new products and sales with our mobile app.
            </Text>
            <Buttons text = 'Login' color = 'black' textColor = 'white'/>
            <Buttons text = 'Sign Up' color = 'white' textColor = 'black'/>
        </View>
      );
  };

const Buttons = (props) => {

    return (
        <TouchableHighlight 
            onPress={console.log('Login')}
            style={{...styles.button, backgroundColor: props.color}}>
                <Text style= {{...styles.buttonText, color: props.textColor}}>
                    {props.text}</Text>
        </TouchableHighlight>
      );
  };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    h1: {
        fontWeight: '900',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        color: 'black'
      },
    h2: {
        fontWeight: '700',
        paddingHorizontal: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 30,
        fontSize: 15,
        textAlign: 'center'
      },
    button: {
      elevation: 5,
      borderRadius: 20,
      borderColor: 'gray',
      borderWidth: 1.5,
      paddingVertical: 12,
      paddingHorizontal: 10,
      width: '80%',
      height: 50,
      marginTop: 10,
      marginBottom: 20
    },
    buttonText: {
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
});

export default MainPage;