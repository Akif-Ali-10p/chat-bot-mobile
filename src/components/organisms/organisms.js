import React from 'react';
import { Text, SafeAreaView, FlatList, View, ScrollView } from 'react-native';
import { VerticalTabBar, HorizontalTabBar } from '../molecules/molecules';

const CategoryTabs = (props) => {
    console.log("tabs: ", props.tabs.length);
    return(
        <ScrollView horizontal style={{width:'100%', flexDirection:'row'}}>
            {props.tabs.map((tab, index) => {
                return(
                    <HorizontalTabBar key={index} onPressed={()=>{console.log('press')}} image={tab.image} text={tab.text} />
                );
            })}
        </ScrollView>
    );
}

const CategoryBars = (props) => {
    console.log("bars: ", props.tabs.length);
    return(
        <ScrollView style={{width:'100%', height:'100%', flexDirection:'column'}}>
            {props.tabs.map((tab, index) => {
                return(
                    <VerticalTabBar key={index} onPressed={()=>{console.log('press')}} image={tab.image} text={tab.text} />
                );
            })}
        </ScrollView>
    );
}

export {CategoryTabs, CategoryBars};