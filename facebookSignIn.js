import auth from '@react-native-firebase/auth';
import { FacebookSocialButton } from "react-native-social-buttons";
import React, { useState } from 'react';

const Facebook = () => {
    const [loggedIn, setloggedIn] = useState(false);

    async function signIn() {
      // Attempt login with permissions
      const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
      if (result.isCancelled) {
        alert('User cancelled the login process');
      }
      // Once signed in, get the users AccesToken
      const data = await AccessToken.getCurrentAccessToken();
      if (!data) {
        alert('Something went wrong obtaining access token');
      }
      // Create a Firebase credential with the AccessToken
      const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
      // Sign-in the user with the credential
      setloggedIn(true);
      return auth().signInWithCredential(facebookCredential);
    };

    async function signOut(){
        try {
          await auth.signOut();
          setloggedIn(false);
        } catch (error) {
          console.error(error);
        }
      };
  
      return (
        <FacebookSocialButton 
          onPress={signIn}
          buttonViewStyle={{
                height: 50,
            }}
           textStyle={{
                fontSize: 15,
                fontWeight: '600'
            }}
            buttonText = {loggedIn ? 'Logged In' : 'Sign in with Facebook'} 
        />
        );
    };
  
  
  export default Facebook;