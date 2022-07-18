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
    logo:{
        marginTop: 20,
        marginBottom: 10, 
        fontSize: 150, 
        fontFamily: 'serif',
         color: 'black'
    },
    h1: {
        fontWeight: '900',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 30,
        fontFamily: 'sans-serif-condensed',
        color: '#333333'
      },
    h2: {
        fontWeight: '700',
        paddingHorizontal: 30,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        marginBottom: 30,
        fontSize: 18,
        textAlign: 'center'
      },
    big_round_button:{
        height: 55,
        width: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        backgroundColor: '#333333',
        borderWidth: 1.5,
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
    tab_text_date:{
        fontSize: 15,
        fontWeight: 'bold',
        color: '#cccccc',
        textAlign: 'right',
        paddingRight: 40
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
    total_amount_text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333333',
        textAlign:'center',
        padding: 20
    },
    small_pic_tile: {
        width: 80, 
        height: 120, 
        resizeMode: 'cover',
        margin: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#dddddd'
    },
    shopping_footer_text:{
        fontSize: 20,
        fontWeight: '800',
        fontFamily: 'sans-serif-condensed',
        color: '#444444'
    }
});

export default style;