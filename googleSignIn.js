import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { GoogleSocialButton } from "react-native-social-buttons";
import React, { useState, useEffect} from 'react';

const Google = () => {
    const [loggedIn, setloggedIn] = useState(false);

    async function signIn(){
      try {
        console.log('Google signed in');
        await GoogleSignin.hasPlayServices();
        const {accessToken, idToken} = await GoogleSignin.signIn();
        setloggedIn(true);
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          alert('Cancel');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          alert('Signin in progress');
          // operation (f.e. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          alert('PLAY_SERVICES_NOT_AVAILABLE');
          // play services not available or outdated
        } else {
          // some other error happened
          alert('Some issue occured.');
        }
      }
    };

    async function signOut(){
      try {
        console.log('signout');
        await GoogleSignin.revokeAccess();
        await GoogleSignin.signOut();
        setloggedIn(false);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      GoogleSignin.configure({
        scopes: ['email'],
        webClientId:
          '638241806945-jak6o1ti78f7gpf87l5isp5bvbj1pi7p.apps.googleusercontent.com',
        offlineAccess: true, 
      });
    }, []);

    return (
      <GoogleSocialButton 
      onPress={() => {
        console.log('Google');
        signIn();
      }}
      buttonViewStyle={{
          borderWidth: 1.5,
          borderColor: "#808080",
          height: 50,
        }}
      textStyle={{
        fontSize: 15,
        fontWeight: '600'
    }} 
      buttonText = {loggedIn ? 'Logged In' : 'Sign in with Google'}
      />
    );
  };

  export default Google;