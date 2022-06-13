import React, {Component} from 'react';  
import {Text, View, StyleSheet, Button} from 'react-native'; 

import {getPosts} from './src/api/msg_api.js';

Props = {};  
  
function chatFunction () {
  // call api to get posts
  getPosts().then(posts => {
    console.log(posts);
    alert(JSON.stringify(posts.data));
  }).catch(err => {
    console.log(err);
  })
}

export default class App extends Component { 
  render() {
    return (  
      <View>  
        <Text style={style.welcome}>Hello World</Text>
        <Text style={style.banner}>Chat Bot App</Text>
        <Button title="Start Chat" onPress={chatFunction} />
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