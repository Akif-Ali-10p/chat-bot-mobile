import React from 'react';
import { View, Text, TextInput } from 'react-native';
import style from './atoms_styles';

const InputField = (props) => {
    return(
        <TextInput 
            style={style.input} 
            placeholder={props.placeHolder} 
            secureTextEntry={props?.password? true : false}
            value={props.text} 
            onChangeText={newText => props.setText(newText)}
        />
    );
}

const HalfLine = () => {
    return(<View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />);
}

const OrText = () => {
    return(<Text style={{width: 50, textAlign: 'center', fontSize:30, fontWeight:'bold'}}>or</Text>);
}

export {InputField, HalfLine, OrText};