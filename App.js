import React, {Component} from 'react';  
import {Text, View, StyleSheet, Button} from 'react-native';
// import styles2 from './chat_screen.css';

// import material ui icons
import { Icon } from "@rneui/themed";
// import Api
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

// Class Component Example.
class MyClassComponent extends Component{
  render(){
    return (
      <View>
        <Text>My Class Component Example</Text>
      </View>
    );
  }
}

// Functional Component Example.
const MyFunctionalComponent = () =>{
  return(
    <View>
      <Text>My Functional Component Example</Text>
    </View>
  );
}

// Header Component
const Header = () => {
  return (
    <View style={style.header}>
      <View style={{flexDirection:'row'}}>
        <Icon name='arrow-back' size={32} color='white' style={style.logo}/>
        <Icon name='account-circle' size={40} color='white' style={style.logo}/>
        <View>
          <Text style={style.headerText}>Chatbot</Text>
          <Text style={style.headerOnline}>Online</Text>
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <Icon name='video-call' size={32} color='white' style={style.logo}/>
        <Icon name='call' size={32} color='white' style={style.logo}/>
        <Icon name='menu' size={32} color='white' style={style.logo}/>
      </View>
    </View>
  );
}

// Footer component
const Footer = () => {
  return (
    <View>
      <Text>{"In progress"}</Text>
    </View>
  );
}

export default class App extends Component { 
  render() {
    return (  
      <View style={{justifyContent:"space-between"}}>  
        <Header />
        <Text style={style.welcome}>Hello World</Text>
        <Text style={style.banner}>Chat Bot App</Text>
        <MyClassComponent />
        <MyFunctionalComponent />
        <Button title="Start Chat" onPress={chatFunction} />
        <Footer/>
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
  },
  header: {
    height: 55,
    flexDirection: 'row',
    backgroundColor: '#005e54',
    justifyContent:"space-between",
    paddingRight: 10
  },
  headerText : {
    fontSize: 28,
    color: 'white',
    fontFamily: 'bold',
    paddingLeft: 10
  },
  headerOnline : {
    fontSize: 15,
    color: 'white',
    paddingLeft: 10,
    marginTop: -5
  },
  logo: {
    marginHorizontal: 2,
    marginVertical: 8
  }
});