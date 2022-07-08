import React, {useState} from 'react';  
import { View } from 'react-native';
// Auth manager
import auth from '@react-native-firebase/auth';

import { Header } from '../molecules/molecules';
import { BigRoundButton, InputField } from '../atoms/atoms';


const Signup = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
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
    return(
        <View>
            <Header text={"Create new account"} onPressed={backButtonPressed} />
            <InputField placeHolder={"Full Name"} setText={setName} text={name} />
            <InputField placeHolder={"Phone Number"} setText={setPhone} text={phone} keyboardType='number-pad'/>
            <InputField placeHolder={"E-mail Address"} setText={setEmail} text={email} keyboardType='email-address' />
            <InputField placeHolder={"Password"} setText={setPassword} text={password} secured={true} />
            <View style={{paddingVertical:20}} />
            <BigRoundButton text={"Log In"} onPressed={signupWithEmail} />
        </View>
    );
  }
export default Signup;