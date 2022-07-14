import React from 'react';
import { Text, SafeAreaView, FlatList, View, ScrollView } from 'react-native';
import { VerticalTabBar, HorizontalTabBar, OrderProductRow, OrderBackground, OrderFooter } from '../molecules/molecules';

const CategoryTabs = (props) => {
    // props: tabs
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
    // props: tabs
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

const OrderModule = (props) => {
    // props: order_list, order_stats
    return(
        // <View style={{elevation:10}}>
            <View style={{borderRadius:10, elevation:10}}>
                <OrderBackground order={props.order_list} status={props.order_stats}/>
                {props.order_list.map((order, index) => {
                    return(
                        <OrderProductRow key={index} order={order} />
                    );
                })}
                <OrderFooter order_stats={props.order_stats} onPressed={()=>{console.log('press')}}/>
            </View>
        // </View>
    );
}

export {CategoryTabs, CategoryBars, OrderModule};