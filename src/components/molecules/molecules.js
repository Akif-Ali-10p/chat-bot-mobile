import React from 'react'; 
import {ImageBackground, TouchableHighlight, View, FlatList} from 'react-native';  
import { BackIcon, HalfLine, HeaderText, MidText, ListCard, TabText } from '../atoms/atoms';
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

const TabBar = (props) => {
    return(
        <TouchableHighlight style={style.card} onPress={props.onPressed}>
            <ImageBackground source={props.image} resizeMode="stretch" imageStyle={{width:'100%'}}>
                <TabText text={props.text}/>
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

export {Divider, Header, HorizontalList, TabBar};
