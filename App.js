/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, useEffect} from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
   FlatList,
   KeyboardAvoidingView
 } from 'react-native';
 
 import { Icon } from "@rneui/themed";
 import axios from 'axios';
 import io from "socket.io-client";
 import socket from "./socket.js";

 import {
   Colors,
   DebugInstructions,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';

 window.navigator.userAgent = 'react-native';
 

const Banner = () => {
  return (
    <View style = {styles.header}>
      <View style = {styles.appbar}>
          <View style = {{flexDirection : 'row'}}>
            <Icon name='robot'
            type ='font-awesome-5'
            size = {27}
            color = '#fff' style={styles.robot} />
            <Text style={styles.heading}>Chat bot</Text>
          </View>

        <View style = {{flexDirection : 'row'}}>
          <Icon name = 'phone' size = {27} color = '#fff' style = {{paddingHorizontal: 10}}/>
          <Icon name = 'options-vertical' type = 'simple-line-icon' size = {25} color = '#fff'/>
        </View>
      </View>
    </View>
  );
};

let conv_id = -1;

const MessageSending = () => {
  const [msgs, setMsgs] = useState([]);
  

  // async function Recieve(m){
  //   const updatedmsgsArray = [...msgs, {message: m, bot: false, conv: conv_id}];
  //   setMsgs(updatedmsgsArray);
  //   const mes = await receiveMessage(m, conv_id);
  //   conv_id = mes.id;
  //   const updatedmsgsArray2 = [...updatedmsgsArray, {message: mes.reply, bot: true, conv: mes.id}];
  //   setMsgs(updatedmsgsArray2);
  // }

  useEffect(() => {
     console.log(socket.connected);
     console.log(socket.id);
      socket.on(socket.id, (msg) => {
        console.log('message: ' + msg);
        setMsgs((prevMessages) => {
          const newMessages = [...prevMessages, {message: msg , bot: true}];
          return newMessages;
        });
      });
  });


  
  return(
    <View style={{flex: 0.8, justifyContent: 'flex-end'}}>
        <Messages msgList = {msgs} />
        <Footer messageSent = {(m) => {
          if(m.length > 0) {
            const updatedmsgsArray = [...msgs, {message: m, bot: false}];
            setMsgs(updatedmsgsArray);
            // const socket = io('localhost:2800', {transports: ['websocket'], jsonp:false, forceNew: true,});
            socket.emit(socket.id, m);
          }
        }}
        />
    </View>
  );
}



const receiveMessage = (msg, id) =>{
  return axios
    .post('https://4cdb-117-20-31-76.in.ngrok.io/conversation', {
        "text": msg,
        "id": id
    })
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      return 'Unable to connect at the moment';
    });
};


const Footer = ({ messageSent }) => {
  const [text, setText] = useState('');
  return (
    <View style={styles.footer}>
      <View style = {{flexDirection : 'row', marginTop: 12, paddingHorizontal: 15}}>
        
        <TextInput style={styles.input}
        placeholder ="Type message here"
        value = {text}
        onChangeText = {msg => setText(msg)}
        onSubmitEditing = {() => {messageSent(text); setText('')}}
        />
        
        <Icon name='sc-telegram'
        type ='evilicon'
        size = {40}
        onPress = {() => {messageSent(text); setText('')}}
        color = '#fff' style={styles.send} />
      </View>
    </View>
  );
};

// let messageList = [
//   {message: 'Hey!', bot: true, conv: conv_id},
// ];

const Messages = (props) => {
  return (
    <View style={{paddingHorizontal: 22}}>
    <FlatList 
      inverted
      data = {[...props.msgList].reverse()}
      renderItem={({item}) => <Message msg = {item}/>}
    />
  </View>
  );
};

const Message = (props) => {
  return(
    <View style={messageStyle(props.msg.bot).message}>
      <Text style={styles.messagetext}>{props.msg.message}</Text>
    </View>
  );
};

const messageStyle = (bool) => {
    return StyleSheet.create({
      message:{
        backgroundColor: !bool ? '#E9C249A0' : '#F25C05A0',
        alignSelf:  !bool ? "flex-end" : "flex-start",
        width: "auto",
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
        marginRight: bool ? 40 : 0,
        marginLeft: !bool ? 40 : 0,
        paddingHorizontal: 10
      }
    });
};

const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <KeyboardAvoidingView style = {styles.mainscreen}>
          <Banner/>
          <MessageSending/>
     </KeyboardAvoidingView>
   );
 };
 

 const styles = StyleSheet.create({
   highlight: {
     fontWeight: '700',
   },
   mainscreen: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
   },
   header:{
    backgroundColor: '#145E8C',
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
    zindex: -1
   },
   appbar: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 18,
    marginRight: 20
  },
   footer:{
    backgroundColor: '#145E8C',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 24,
   },
   heading: {
    color: Colors.white,
    fontWeight: '700',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 26,
  },
  input: {
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 5,
    borderRadius: 20, 
    fontSize: 16,
  },
  send:{
    marginTop: 10
  },
  robot:{
    marginLeft: 20,
    padding: 11,
    borderRadius: 50,
    backgroundColor: '#F25C05',
    justifyContent: 'center'
  },
  messagetext:{
    fontSize: 17,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
 });
 
 export default App;