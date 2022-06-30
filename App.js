import React, {Component, useState} from 'react';  
import {Text, View, ScrollView, FlatList, StyleSheet, Button, TextInput, KeyboardAvoidingView} from 'react-native';
import InvertibleScrollView from 'react-native-invertible-scroll-view';
// import material ui icons
import { Icon } from "@rneui/themed";
// import Api
import {getPosts, postData} from './src/api/msg_api.js';

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
    <View style={style().header}>
      <View style={{flexDirection:'row'}}>
        <Icon name='arrow-back' size={32} color='white' style={style().logo}/>
        <Icon name='account-circle' size={40} color='white' style={style().logo}/>
        <View>
          <Text style={style().headerText}>Chatbot</Text>
          <Text style={style().headerOnline}>Online</Text>
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <Icon name='video-call' size={32} color='white' style={style().logo}/>
        <Icon name='call' size={32} color='white' style={style().logo}/>
        <Icon name='options-vertical' type="simple-line-icon" size={32} color='white' style={style().logo}/>
      </View>
    </View>
  );
}

// Message component
const Message = (props) =>{
  return(
    // Add styling here. msgLen
    // <View style={[styles.default,props.backgroundColor && {backgroundColor:props.backgroundColor}]}>
    <View style={style({server: props.msg.server}).message}>
      <Text style={style().message_text}>{props.msg.text}</Text>
      <View style={{flexDirection:"row-reverse", paddingHorizontal:5, paddingBottom:5}}>
        <Text>{"5:21pm"}</Text>
      </View>
    </View>
  );
}

// Body component
const Body = (prop) => {
  return(
    // <>
      <FlatList  
        data = {[...prop.messages].reverse()}
        inverted={true}
        renderItem = {(text) => 
          <Message msg={text.item}/>
        }
      /> 
      //  {prop.messages.map((text) => <Message msg={text}/>)}
    // </>
  );
}

// Footer component
const Footer = (props) => {
  // text field
  const [text, setText] = useState("");
  // on change the text input set text
  function onchange(value){setText(value)};
  // Send the msg to server and get reply
  async function sendMsg(){
    if(text.length>0){
      // get id from previous message
      const id = props.messages[props.messages.length - 1].conv ?? -1;
      // send user text
      const msg_thread = [...props.messages,{text:text, server:false, conv: id}];
      props.setMsg(msg_thread);
      setText("");
      // get reply=
      postData({text, id}).then((data)=>{
        // Send this message
        console.log("Package from client:");
        console.log({text, id});
        // return servers response
        console.log("Package from server:");
        console.log(data);
        props.setMsg([...msg_thread, {text: data.reply, server:true, conv: data.id}]);
      });
    }
  }
  return (
    <View style={style().footer}>
      <View style={style().inputText}>
        <Icon name='emoji-emotions' size={32} color='grey' style={style().logo}/>
        <TextInput style={{width:"75%"}} fontSize={18} value={text} onSubmitEditing={sendMsg} onChangeText={onchange} placeholder="Type a message."/>
        <Icon name='photo-camera' size={32} color='grey' style={style().logo}/>
      </View>
      <Icon name={text.length>0? "send" : "mic"} backgroundColor={"#005e54"} iconStyle={{margin:10}} size={32} color='white' borderRadius={30} style={style().logo} onPress={sendMsg}/>
    </View>
  );
}

const MyApp = () =>{
  const [msgs, setMsgs] = useState(
    [{text:"Hello, is there anyone?", server: false},
    {text:"Yes, How may I help you?", server: true},
    {text:"I want to learn React-Native", server: false},
    {text:"Go through documentation, stackoverflow", server: true}, 
    {text:"I've already done that.", server: false},
    {text:"Bas best, Lets plan then. :)", server: true},
    {text:"Thankyou bhai for help", server: false},
    {text:"Anytime :)", server: true},
    {text:"Why would you not reply", server: false},
    {text:"Auto-scroll works", server: true}
    ]);
  return(
    <>
      <Body messages={msgs}/>
      <Footer messages={msgs} setMsg={setMsgs}/>
    </>
  );
}

export default class App extends Component { 
  render() {
    return (  
      <KeyboardAvoidingView style={{backgroundColor:"grey",flex:1, justifyContent:"space-between"}}>  
        <Header />
        <MyApp />
      </KeyboardAvoidingView>  
    );  
  }  
}

const style = (props) => StyleSheet.create({
// const style = StyleSheet.create({
  welcome: {  
    fontSize: 48,  
    textAlign: 'center',  
    margin: 10, 
    color: 'red',
    fontWeight: 'bold'
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
    fontWeight: 'bold',
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
  },
  message: {
    backgroundColor: props?.server? "#fffff0": "#e1ffc7", 
    shadowRadius:5,
    width:"auto",
    paddingHorizontal:5,
    alignSelf: props?.server? "flex-start" : "flex-end",
    margin: 5,
    shadowColor: "transparent",
    borderRadius: 10
  },
  message_text: {
    fontSize: 20, 
    fontWeight:"400", 
    color:"black", 
    paddingHorizontal:15, 
    paddingVertical:5
  },
  inputText: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    margin: 8,
    width: "80%"
  },
  footer: {
    height: 70, 
    flexDirection:"row", 
    justifyContent:"space-evenly", 
    flexWrap:"wrap"
  }
});