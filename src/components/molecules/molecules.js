import React, { useState } from 'react'; 
import {ImageBackground, TouchableHighlight, View, FlatList, Text} from 'react-native';  
import { BackIcon, HalfLine, HeaderText, MidText, ListCard, H1, H2, Slogo, TabText, SmallPictureTile, OrderBannerText, TotalAmountText, SquareButton, TotalFooter, ProductImageTile, CheckBox } from '../atoms/atoms';
import style from './molecule_styles';



const Divider = () => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 30}}>
            <HalfLine />
            <MidText />
            <HalfLine />
        </View>
    );
}

const Header = (props) => {
    return(
        <View>
            <BackIcon onPressed={props.onPressed}/>
            <HeaderText text={props.text}/>
        </View>
    );
}

const HorizontalTabBar = (props) => {
    return(
        <TouchableHighlight style={{...style.card,...props.style}} onPress={props.onPressed}>
            <ImageBackground source={{uri:props.image}} resizeMode="stretch" imageStyle={{width:'100%'}}>
                <TabText text={props.text}/>
            </ImageBackground>
        </TouchableHighlight>
    );
}

const VerticalTabBar = (props) => {
    return(
        <TouchableHighlight style={style.bar} onPress={props.onPressed}>
            <ImageBackground source={{uri:props.image}} resizeMode='stretch' imageStyle={{width:'100%'}}>
                <TabText text={props.text} text_container={{width:400}}/>
            </ImageBackground>
        </TouchableHighlight>
    );
}

const HorizontalList = (props) => {
    return(
        <FlatList
            // style={styles.flatList}
            horizontal={true}
            data={props.list}
            renderItem={({item}) => 
                <ListCard
                image = {item.image}
                desc = {item.desc}
                price = {item.price}
                />
            }
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const VerticalList = (props) => {
    return(
        <FlatList
            // style={styles.flatList}
            data={props.list}
            renderItem={({item}) => 
                <View style = {{paddingVertical: 10, paddingHorizontal: 8}}>
                <ListCard
                image = {item.image}
                desc = {item.desc}
                price = {item.price}
                />
                </View>
            }
            numColumns = {2}
            keyExtractor={(item, index) => index.toString()}
        />
    );
}

const MainPageText = (props) => {
    return (
        <View style = {{alignItems: 'center'}}>
            <Slogo/>
            <H1 text = {'Welcome to Shopertino!'}/>
            <H2 style = {{marginBottom: 30, fontFamily: 'sans-serif-condensed',}} 
                text = {'Shop & get updates on new products and sales with our mobile app.'}/>
        </View>
      );
  };

const OrderFooter = (props) => {
    // props: order_stats, onPressed
    return(
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TotalAmountText text={props.order_stats.total}/>
            <SquareButton text={'REORDER'} onPressed={props.onPressed} />
        </View>
    );
}

const OrderProductRow = (props) => {
    return(
        <View style={{flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10}}>
            <SmallPictureTile image={props.order.image}/>
            <Text style={{fontWeight: 'bold', fontFamily: 'sans-serif-condensed', fontSize: 20}} >{props.order.text}</Text>
        </View>
    );
}

const OrderBackground = (props) => {
    // props: order, status
    return(
        <View style={{...style.bar, borderRadius:10}}>
            <ImageBackground source={{uri:props.order[0].image}} resizeMode='contain' imageStyle={{width:'100%'}}>
                <OrderBannerText text={props.status?.text ?? 'Order Placed'} date={"Ordered on " + props.status?.date} text_container={{width:400}}/>
            </ImageBackground>
        </View>
    );
}

const ShoppingFooter = (props) => {
    // props: total, onPressed
    return(
        <View>
            <TotalFooter total={props.total}/>
            <SquareButton text={'CONTINUE'} style={{width:'90%'}} onPressed={props.onPressed}/>
        </View>
    );
}

const ProductCard = (props) => {
    return(
        <View style = {{flexDirection: 'row',  margin: 8}}>
            <ProductImageTile/>
            <View style = {{padding: 15, justifyContent: 'space-between'}}>
                <Text style = {{marginTop: 12, fontSize: 18, fontWeight: '700', color: 'black'}}>
                    Nike Sneakers</Text>
                    
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style = {{fontSize: 17, marginRight: 10, fontWeight: '700', fontFamily: 'sans-serif-condensed',}}>Colors</Text>
                        
                        <CheckBox color = 'white' />
                        <CheckBox color = 'pink' />
                        <CheckBox color = 'black' />

                        
                    </View>
                    
                    


                <Text style = {{fontSize: 20, fontWeight: '900', color: 'black'}}>
                    $79</Text>
            </View>
        </View>
    );
}

export {Divider, Header, HorizontalList, HorizontalTabBar, VerticalList, MainPageText, VerticalTabBar, OrderProductRow, OrderBackground, OrderFooter, ShoppingFooter, ProductCard};
