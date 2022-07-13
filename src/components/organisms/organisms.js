import React from 'react';
import { Text, SafeAreaView, FlatList, View, ScrollView } from 'react-native';
import { TabBar } from '../molecules/molecules';

const CategoryTabs = (props) => {
    console.log("tabs: ", props.tabs.length);
    return(
        <ScrollView horizontal style={{width:'100%', flexDirection:'row'}}>
            {props.tabs.map((tab, index) => {
                return(
                    <TabBar key={index} onPressed={()=>{console.log('press')}} image={tab.image} text={tab.text} />
                );
            })}
        </ScrollView>
    );
}

export default CategoryTabs;