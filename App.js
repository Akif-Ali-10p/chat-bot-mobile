import React, {Component, useEffect, useState} from 'react';  
import {Text, View, ScrollView, KeyboardAvoidingView, StyleSheet, TextInput, Button, TouchableHighlight} from 'react-native';  
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
        <Signup />
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
    return (  
      <View>
        <SignIn />
      </View>
      // <AppUI />
      // <Signup />
      // <View><Text>Hey</Text></View>
    );  
  }
}

const style = StyleSheet.create({
  screen:{
    flex:1,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'light-grey',
    padding:20
  },
  inputContainer:{
    flex:0.3,
    // justifyContent:'space-evenly',
    alignItems:'center',
    backgroundColor:'#f5f5f5',
    padding:20

  },
  fields:{
    flex:0.3,
    justifyContent:'center',
    alignItems:'center',
  },
  logo: {  
    fontSize: 48,  
    textAlign: 'center',  
    margin: 10, 
    color: 'red',
    fontWeight: 'bold',
  },
  header:{
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  input:{
    borderWidth: 1,
    borderColor: 'black',
    width: '60%',
    height: 38,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  button:{
    height: '8%',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'grey'
  },
  socials:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    padding:20
  },
});