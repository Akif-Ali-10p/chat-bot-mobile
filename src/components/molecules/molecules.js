import React from 'react';  
import {View, FlatList, Text} from 'react-native';  
import { BackIcon, HalfLine, HeaderText, MidText, ListCard, H1, H2, Slogo } from '../atoms/atoms';

const Divider = () => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
            <HalfLine />
            <MidText />
            <HalfLine />
        </View>
    );
}

const Header = (props) => {
    return(
        <View>
            <BackIcon onPressed={props.onPressed}/>
            <HeaderText text={props.text}/>
        </View>
    );
}

const HorizontalList = (props) => {
    return(
        <FlatList
            // style={styles.flatList}
            horizontal={true}
            data={props.list}
            renderItem={({item}) => 
                <ListCard
                image = {item.image}
                desc = {item.desc}
                price = {item.price}
                />
            }
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const VerticalList = (props) => {
    return(
        <FlatList
            // style={styles.flatList}
            data={props.list}
            renderItem={({item}) => 
                <View style = {{paddingVertical: 10, paddingHorizontal: 8}}>
                <ListCard
                image = {item.image}
                desc = {item.desc}
                price = {item.price}
                />
                </View>
            }
            numColumns = {2}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const MainPageText = (props) => {
    return (
        <View style = {{alignItems: 'center'}}>
            <Slogo/>
            <H1 text = {'Welcome to Shopertino!'}/>
            <H2 style = {{marginBottom: 30, fontFamily: 'sans-serif-condensed',}} 
                text = {'Shop & get updates on new products and sales with our mobile app.'}/>
        </View>
      );
  };


export {Divider, Header, HorizontalList, VerticalList, MainPageText};