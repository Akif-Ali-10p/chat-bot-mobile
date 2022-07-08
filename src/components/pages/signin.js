import React from 'react';
import { View, Text, TextInput } from 'react-native';
// import material ui icons
import { Icon } from "@rneui/themed";

import { InputField } from '../atoms/atoms';

const SignIn = () => {
    const [email, setEmail] = React.useState('');
    return(
        <View>
            {/* <Icon name='call' size={32} color='black' style={{marginHorizontal: 2, marginVertical: 8}}/> */}
            <Text style={{fontSize:40, paddingLeft: 10}}>{"<"}</Text>
            <Text style={{fontSize:25, fontWeight:'bold', paddingVertical:20, paddingLeft: 20}}>{"Sign In"}</Text>
            <InputField placeHolder={"E-mail or phone number"} setText={setEmail} text={email}/>
        </View>
    );
}

export default SignIn;