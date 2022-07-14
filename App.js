import React, {Component, useEffect, useState} from 'react';  
import {Text, ImageBackground, View, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';  
// Beuatiful Social Buttons
import { FacebookSocialButton, MicrosoftSocialButton, GoogleSocialButton } from 'react-native-social-buttons';
// Auth manager
import auth from '@react-native-firebase/auth';
// Google Signin
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// Facebook Signin
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
// import signup
import Signup from './src/components/pages/signup.js';
import SignIn from './src/components/pages/signin.js';
import Onboard from './src/components/pages/onboarding.js';



GoogleSignin.configure({
  webClientId: '638241806945-jak6o1ti78f7gpf87l5isp5bvbj1pi7p.apps.googleusercontent.com',
});

const AppUI = () =>{
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);
  if (initializing) return null;

  console.log("Refreshed UI with user: ", user);
  
  if (!user) {
    return (
      <View>
        <SignIn />
        {/* <Signup /> */}
        {/* <Onboard /> */}

      </View>
    );
  }
  return (
    <View style={{justifyContent:'center', alignItems:'center', flex:1}}>
      <Text style={style.header}>Welcome {user.email}</Text>
      <GoogleSocialButton buttonText="Sign-out" onPress={() => auth().signOut()} buttonViewStyle={{borderRadius:40, borderColor:'black', borderWidth: 2}} />      
    </View>
  );
}
export default class App extends Component {  
  render() { 
    console.log("Refreshed UI."); 
    return (  
      <AppUI />
    );  
  }
}

const style = StyleSheet.create({
  header:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  }
});