import React, {Component} from 'react';  
import {Text, View, StyleSheet} from 'react-native';  
  
Props = {};  
export default class App extends Component {  
  render() {  
    return (  
      <View>  
        <Text style={style.welcome}>Hello World</Text>
        <Text style={style.banner}>Chat Bot App</Text>  
      </View>  
    );  
  }  
}

const style = StyleSheet.create({
  welcome: {  
  fontSize: 48,  
  textAlign: 'center',  
  margin: 10, 
  color: 'red',
  fontWeight: 'bold',
},
  banner:{
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  }  
});