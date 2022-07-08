import React from 'react';  
import {View} from 'react-native';  
import { HalfLine, OrText } from '../atoms/atoms';

const Divider = () => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
            <HalfLine />
            <OrText />
            <HalfLine />
        </View>
    );
}

export default Divider;