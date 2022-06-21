/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Node} from 'react';
 
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TextInput,
   useColorScheme,
   View,
   FlatList
 } from 'react-native';
 
 import { Icon } from "@rneui/themed";

 import {
   Colors,
   DebugInstructions,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 

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
          <Icon name = 'phone' size = {27} color = '#fff'/>
          <Icon name = 'options-vertical' type = 'simple-line-icon' size = {25} color = '#fff'/>
        </View>
      </View>
    </View>
  );
};

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style = {{flexDirection : 'row', marginTop: 12, paddingHorizontal: 15}}>
        <TextInput style={styles.input}
        defaultValue="Write something here"/>
        <Icon name='sc-telegram'
        type ='evilicon'
        size = {40}
        color = '#fff' style={styles.send} />
      </View>
    </View>
  );
};

const Messages = () => {
  return (
    <View style={{flex: 1, flexDirection: 'column-reverse', paddingHorizontal: 20}}>
    <FlatList
      data={[
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
      ]}
      renderItem={({item}) => <Message msg = {item.key}/>}
    />
  </View>
  );
};

const Message = (props) => {
  return(
    <View style={styles.message}>
      <Text style={styles.messagetext}>{props.msg}</Text>
    </View>
  );
};

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <View style = {styles.mainscreen}>
         <Banner/>
         <Messages/>
         <Footer/>
     </View>
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
   },
   appbar: {
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 24,
    marginRight: 20
  },
   footer:{
    backgroundColor: '#145E8C',
    height: 75,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 24,
   },
   heading: {
    color: Colors.white,
    fontWeight: '700',
    paddingHorizontal: 20,
    fontSize: 26,
  },
  input: {
    width: 320,
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
    marginLeft: 20
  },
  messagetext:{
    fontSize: 17,
    fontWeight: '500',
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  message:{
    backgroundColor: '#A0E9C249',
    height: 50,
    borderRadius: 10,
    marginTop: 10,
  }
 });
 
 export default App;