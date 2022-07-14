import React from 'react'; 
import {ImageBackground, TouchableHighlight, View, FlatList, Text} from 'react-native';  
import { BackIcon, HalfLine, HeaderText, MidText, ListCard, TabText, SmallPictureTile } from '../atoms/atoms';
import style from './molecule_styles';

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

const HorizontalTabBar = (props) => {
    return(
        <TouchableHighlight style={{...style.card,...props.style}} onPress={props.onPressed}>
            <ImageBackground source={{uri:props.image}} resizeMode="stretch" imageStyle={{width:'100%'}}>
                <TabText text={props.text}/>
            </ImageBackground>
        </TouchableHighlight>
    );
}

const VerticalTabBar = (props) => {
    return(
        <TouchableHighlight style={style.bar} onPress={props.onPressed}>
            <ImageBackground source={{uri:props.image}} resizeMode='stretch' imageStyle={{width:'100%'}}>
                <TabText text={props.text} text_container={{width:400}}/>
            </ImageBackground>
        </TouchableHighlight>
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

const OrderProductRow = (props) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
            <SmallPictureTile image={props.order.image}/>
            <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed', fontSize: 20}} >{props.order.text}</Text>
        </View>
    );
}

const OrderBackground = (props) => {
    // props: order, status
    return(
        <View style={{...style.bar, borderRadius:10}}>
            <ImageBackground source={{uri:props.order[0].image}} resizeMode='contain' imageStyle={{width:'100%'}}>
                    <TabText text={props.status?.text ?? 'Order Placed'} text_container={{width:400}}/>
            </ImageBackground>
        </View>
    );
}

export {Divider, Header, HorizontalList, HorizontalTabBar, VerticalTabBar, OrderProductRow, OrderBackground};
