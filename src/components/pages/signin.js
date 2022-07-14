import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';

import { InputField, MidText, BackIcon, BigRoundButton, BigRoundSocialButton } from '../atoms/atoms';
import { Header } from '../molecules/molecules';

// Auth manager
import auth from '@react-native-firebase/auth';
// Google Signin
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// Facebook Signin
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function backButtonPressed() {
        console.log("Back button pressed");
    }
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
        const { idToken } = await GoogleSignin
        .signIn()
        .catch(error => {
            throw String(error).split('\n')[0];
        });
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
    return (
        <View style={{height:'100%'}}>
            <Header text={"Sign In"} onPressed={backButtonPressed} />
            <InputField placeHolder={"E-mail or phone number"} setText={setEmail} text={email} />
            <InputField placeHolder={"Password"} setText={setPassword} text={password} secured={true} />
            <BigRoundButton text={"Log In"} onPressed={signupWithEmail} />
            <MidText text={"OR"} />
            <BigRoundSocialButton social="Facebook" onPressed={signupWithFacebook} />
            <BigRoundSocialButton social="Google" onPressed={signupWithGoogle} />
        </View>
    );
}

export default SignIn;