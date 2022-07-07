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


GoogleSignin.configure({
  webClientId: '638241806945-jak6o1ti78f7gpf87l5isp5bvbj1pi7p.apps.googleusercontent.com',
});

const Divider = (props) => {
  return(
    <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
      <View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />
      <View>
        <Text style={{width: 50, textAlign: 'center', fontSize:30, fontWeight:'bold'}}>{props.text}</Text>
      </View>
      <View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />
    </View>
  );
}
const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  async function signupWithEmail() {
    console.log("Signup");
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      console.error(error);
    });
  }

  async function signupWithGoogle() {
    console.log("Signup with Google");
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
    console.log(googleCredential);
    return auth().signInWithCredential(googleCredential);
  }

  async function signupWithFacebook() {
    console.log("Signup with Facebook");
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
      throw 'Something went wrong obtaining access token';
    }
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }
  return(
    <KeyboardAvoidingView >
      <ScrollView>
        <View style={style.screen}>
          <Text style={style.logo}>My-App</Text>
          <Text style={style.header}>Sign-Up</Text>
            <TextInput style={style.input} placeholder="Name"/>
            <TextInput style={style.input} placeholder="Email" value={email} onChangeText={newText => setEmail(newText)}/>
            <TextInput style={style.input} placeholder="Password" secureTextEntry={true} value={password} onChangeText={newText => setPassword(newText)}/>
          <TouchableHighlight style={style.button} onPress={signupWithEmail}>
            <Text style={{color:'white', fontSize: 20}}>Register</Text>
          </TouchableHighlight> 
          <Divider text={"or"}/>
          <View style={style.socials}>
            <GoogleSocialButton onPress={signupWithGoogle} buttonViewStyle={{borderRadius:40, borderColor:'black', borderWidth: 2}} />
            <FacebookSocialButton onPress={signupWithFacebook} buttonViewStyle={{borderRadius:40, borderColor:'black', borderWidth: 2}} />
            <MicrosoftSocialButton onPress={() => {}} buttonViewStyle={{borderRadius:40, borderColor:'black', borderWidth: 2}}/>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
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
      <AppUI />
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