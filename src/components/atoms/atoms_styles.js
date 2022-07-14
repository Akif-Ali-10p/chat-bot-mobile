import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    input:{
        width: '85%',
        height: 50,
        margin: 10,
        padding: 5,
        fontSize: 16,
        paddingLeft: 20,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
      },
      mid_text:{
        width: 50, 
        textAlign: 'center', 
        fontSize: 28, 
        fontFamily: 'sans-serif-condensed',
        fontWeight:'bold'
    },
    header_text:{
        fontSize:30,
        color:'#333333', 
        fontWeight:'bold', 
        paddingVertical:20, 
        paddingLeft: 20
    },
    big_round_button:{
        height: 55,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#333333',
        borderWidth: 1,
        borderColor: 'grey'
    },
    big_round_button_text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    onboarding_text:{
        fontSize: 35,
        fontWeight: 'bold',
        fontFamily: 'sans-serif-condensed',
        color: 'white',
        textAlign: 'center',
        padding: 20
    },
    tab_text_container:{
        width: 150,
        height: '100%',
        justifyContent: 'center',
        backgroundColor: '#000000a0'
    },
    tab_text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    big_square_button:{
        height: 50,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#333333',
        borderWidth: 1,
        borderColor: 'grey',
        elevation: 5
    },
    total_amount_text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        textAlign:'center',
        padding: 20
    }
});

export default style;