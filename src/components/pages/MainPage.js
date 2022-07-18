import React, { useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {MainPageText } from '../molecules/molecules';
import { BigRoundButton } from '../atoms/atoms';

const MainPage = () => {
  function loginIn() {
    console.log("Login button pressed");
  }

  function signUp() {
    console.log("SignUp button pressed");
  }

    return (
        <View style = { {height: '100%'}}>
            <MainPageText/>
            <BigRoundButton text = 'Log In' onPressed={loginIn} />
            <BigRoundButton text = 'Sign Up' onPressed={signUp}
               style = {{backgroundColor: 'white'}}
               textStyle = {{color: '#333333'}}
             />
         </View>
      );
  };

export default MainPage;