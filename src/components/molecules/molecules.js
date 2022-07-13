import React from 'react';  
import {View, FlatList} from 'react-native';  
import { BackIcon, HalfLine, HeaderText, MidText, ListCard } from '../atoms/atoms';

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

export {Divider, Header, HorizontalList};