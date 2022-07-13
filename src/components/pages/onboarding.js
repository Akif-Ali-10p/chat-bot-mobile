import React, {useState} from 'react';  
import { Text, View } from 'react-native';
import { NavigatorDots, OnboardingLogo, OnboardingTagline, OnboardingText } from '../atoms/atoms';
import { Header } from '../molecules/molecules';


const Onboard = () => {
    function backButtonPressed() {
        console.log("Back button pressed");
    }
    return(
        <View style={{backgroundColor:'#333333', height:'100%', width:'100%', justifyContent:'space-evenly', paddingTop:'30%'}}>
          <OnboardingLogo logo='favorite'/>
          <OnboardingText text='Shopertino'/>
          <OnboardingTagline text='Shopertino is a marketplace for all things fashion.'/>
          <NavigatorDots numDots={5}/>
        </View>
    );
  }
export default Onboard;