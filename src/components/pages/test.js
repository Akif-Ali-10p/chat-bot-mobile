import React from 'react';
import { Text, FlatList, View, ScrollView } from 'react-native';
import { SquareButton, TotalAmountText } from '../atoms/atoms';

const TestPage = () => {
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TotalAmountText text='$0.00'/>
            <SquareButton text={'REORDER'} />
        </View>
    );
}

export default TestPage;