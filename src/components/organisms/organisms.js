import React from 'react';
import { Text, SafeAreaView, FlatList, View, ScrollView } from 'react-native';
import { SquareButton, TotalAmountText } from '../atoms/atoms';
import { VerticalTabBar, HorizontalTabBar, OrderProductRow, OrderBackground } from '../molecules/molecules';

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
        <View style={{elevation:10}}>
            <View style={{borderRadius:10}}>
                <OrderBackground order={props.order_list} status={props.order_stats}/>
                {props.order_list.map((order, index) => {
                    return(
                        <OrderProductRow key={index} order={order} />
                    );
                })}
                <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                    <TotalAmountText text='$0.00'/>
                    <SquareButton text={'REORDER'} />
                </View>
            </View>
        </View>
    );
}

export {CategoryTabs, CategoryBars, OrderModule};