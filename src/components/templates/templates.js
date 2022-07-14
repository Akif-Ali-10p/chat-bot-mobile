import React from 'react';
import { FlatList, View } from 'react-native';
import { OrderModule } from '../organisms/organisms';

const OrderHistory = (props) => {
    // props: orders
    return(
        <FlatList
            data={props.orders} 
            renderItem={({item}) => {
                return(
                    <View style={{paddingVertical:5}}>
                        <OrderModule order_list={item.orderlist} order_stats={item.status}/>
                    </View>
                );
            }
        }/>
    );
}

export {OrderHistory};