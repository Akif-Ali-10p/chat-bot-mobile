import React from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import style from './atoms_styles';
// import material ui icons
import { Icon } from "@rneui/themed";
// import social buttons
import { FacebookSocialButton, GoogleSocialButton } from 'react-native-social-buttons';

const InputField = (props) => {
    return(
        <View style={{alignItems:'center', padding:5}}>
            <TextInput 
                style={style.input} 
                placeholder={props.placeHolder} 
                secureTextEntry={props?.secured? true : false}
                value={props.text} 
                onChangeText={newText => props.setText(newText)}
                keyboardType={props.keyboardType ? props.keyboardType : 'default'}
            />
        </View>
    );
}

const HalfLine = () => {
    return(<View style={{flex: 1, height: 2, backgroundColor: 'grey'}} />);
}

const MidText = (props) => {
    return(
        <View style={{alignItems:'center', margin:30}}>
            <Text style={style.mid_text}>{props.text}</Text>
        </View>
    );
}

const HeaderText = (props) => {
    return(
        <Text style={style.header_text}>{props.text}</Text>
    );
}

const BackIcon = (props) => {
    return(
        <View style={{alignItems:'flex-start', margin:10}}>
        <Icon 
            name='ios-american-football' 
            type='ionicon'
            onPress={props.onPressed}
            size={30} color='black' 
            style={{padding:10, backgroundColor:'grey'}}/>
        </View>
    );
}

const BigRoundButton = (props) => {
    return(
        <View style={{alignItems:'center', paddingVertical:20}}>
            <TouchableHighlight style={style.big_round_button} onPress={props.onPressed} >
                <Text style={style.big_round_button_text}>{props.text}</Text>
            </TouchableHighlight>
        </View>
    );
}

const BigRoundSocialButton = (props) => {
    let button;
    if(props.social==='Google'){
        button = <GoogleSocialButton buttonText={'Google Login'} onPress={props.onPressed} buttonViewStyle={{...style.big_round_button, backgroundColor: 'white'}} textStyle={{...style.big_round_button_text, color:'black'}} />
    }else if(props.social==='Facebook'){
        button = <FacebookSocialButton buttonText={'Facebook Login'} onPress={props.onPressed} buttonViewStyle={{...style.big_round_button,backgroundColor: '#385898', borderColor: 'black' }} textStyle={style.big_round_button_text} />
    }
    return(
        <View style={{alignItems:'center', paddingVertical:20}}>
            {button}
        </View>
    );
}

const OnboardingLogo = (props) => {
    return(
        <View style={{alignItems:'center', padding:10, borderColor:'white', borderWidth:2}}>
            <Icon name={props.logo} type={props.logoType} size={50} color='white'/>
        </View>
    );
}

const OnboardingText = (props) => {
    return(
        <View style={{alignItems:'center', padding:10}}>
            <Text style={style.onboarding_text}>{props.text}</Text>
        </View>
    );
}

const OnboardingTagline = (props) => {
    return(
        <View style={{alignItems:'center', padding:10}}>
            <Text style={{...style.onboarding_text,fontSize:20}}>{props.text}</Text>
        </View>
    );
}

const NavigatorDots = (props) => {
    return(
        <View style={{justifyContent:'center', padding:10, flexDirection:'row'}}>
            {[...Array(props.numDots)].map(e => (
                <Text style={style.onboarding_text}>{'.'}</Text>
            ))}
        </View>
    );
}

const TabText = (props) => {
    return(
        <View style={{...style.tab_text_container, ...props.text_container}}>
            <Text style={style.tab_text}>{props.text}</Text>
        </View>
    );
}

const SquareButton = (props) => {
    return(
        <View style={{alignItems:'center', paddingVertical:20}}>
            <TouchableHighlight style={style.big_square_button} onPress={props.onPressed} >
                <Text style={{...style.big_round_button_text, fontSize:15}}>{props.text}</Text>
            </TouchableHighlight>
        </View>
    );
}

const ListCard = (props) => {
    return(
        //props.item: image, desc, price
        <View style={{ height: 250, width: 150, marginLeft: 20, borderWidth: 1, borderColor: '#dddddd' }}>
            <View style={{ flex: 2 }}>
                <Image source={{uri: props.image}}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                />
            </View>
            <View style={{ flex: 0.5, paddingLeft: 10, paddingVertical: 5,}}>
                <Text style={{fontWeight: '700', fontSize: 18}} >{props.price}</Text>
                <Text style={{fontWeight: '500', fontSize: 15}} >{props.desc}</Text>
            </View>
        </View>
    );
}

const TotalAmountText = (props) => {
    return(
        <View style={{alignItems:'flex-start', padding:10}}>
            <Text style={style.total_amount_text}>{"Total: "+props.text}</Text>
        </View>
    );
}

const SmallPictureTile = (props) => {
    return(
        <Image 
            source={{uri: props.image}}
            style={style.small_pic_tile}
        />
    );
}

const OrderDate = (props) => {
    return(
        <View style={{alignItems:'flex-end', padding:10}}>
            <Text style={{}}>{props.text}</Text>
        </View>
    );
}

const OrderBannerText = (props) => {
    return(
        <View style={{...style.tab_text_container, ...props.text_container, justifyContent:'space-around'}}>
            <View></View>
            <Text style={style.tab_text}>{props.text}</Text>
            <Text style={style.tab_text_date}>{props.date}</Text>
        </View>
    );
}

export {InputField, HalfLine, MidText,
     HeaderText, BackIcon, BigRoundButton,
     BigRoundSocialButton, OnboardingLogo,
     OnboardingText, OnboardingTagline, NavigatorDots,
     ListCard, TabText,
     SquareButton, TotalAmountText, SmallPictureTile, OrderDate, OrderBannerText
    };
