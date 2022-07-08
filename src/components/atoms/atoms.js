import React from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import style from './atoms_styles';
// import material ui icons
import { Icon } from "@rneui/themed";

const InputField = (props) => {
    return(
        <View style={{alignItems:'center', padding:5}}>
            <TextInput 
                style={style.input} 
                placeholder={props.placeHolder} 
                secureTextEntry={props?.secured? true : false}
                value={props.text} 
                onChangeText={newText => props.setText(newText)}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            />
        </View>
    );
}

const HalfLine = () => {
    return(<View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />);
}

const MidText = (props) => {
    return(
        <View style={{alignItems:'center', margin:30}}>
            <Text style={style.mid_text}>{props.text}</Text>
        </View>
    );
}

const HeaderText = (props) => {
    return(
        <Text style={style.header_text}>{props.text}</Text>
    );
}

const BackIcon = (props) => {
    return(
        <View style={{alignItems:'flex-start', margin:10}}>
        <Icon 
            name='arrow-back-ios' 
            type='material'
            onPress={props.onPressed}
            size={30} color='black' 
            style={{padding:10, backgroundColor:'grey'}}/>
        </View>
    );
}

const BigRoundButton = (props) => {
    return(
        <View style={{alignItems:'center', paddingVertical:20}}>
            <TouchableHighlight style={props.style ? {...style.big_round_button,...props.style} : style.big_round_button} onPress={props.onPressed} >
                <Text style={props.textStyle ? {...style.big_round_button_text, ...props.textStyle} :style.big_round_button_text}>{props.text}</Text>
            </TouchableHighlight>
        </View>
    );
}

export {InputField, HalfLine, MidText, HeaderText, BackIcon, BigRoundButton};