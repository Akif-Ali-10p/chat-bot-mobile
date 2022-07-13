import React, {useState} from 'react';  
import { Text, View } from 'react-native';
import { TabBar } from '../molecules/molecules';
import CategoryTabs from '../organisms/organisms';

const HomePage = () => {
    function ButtonPressed() {
        console.log("button pressed");
    }
    const tabs = [
        {
            text:'Clothing',
            image:{uri:'https://s3.envato.com/files/0350047d-c378-4338-921f-857703904efa/inline_image_preview.jpg'},
            onPressed:{ButtonPressed}
        },
        {
            text:'Accesories',
            image:{uri:'https://tozalionline.com/wp-content/uploads/2021/06/depositphotos_190005142-stock-photo-flat-lay-female-fashion-accessories.jpg'},
            onPressed:{ButtonPressed}
        },
        {
            text:'Shoes',
            image:{uri:'https://previews.123rf.com/images/halfpoint/halfpoint1504/halfpoint150400531/39230472-various-running-shoes-laid-on-a-wooden-floor-background.jpg'},
            onPressed:{ButtonPressed}
        },
    ]
    return(
        <View>
            <CategoryTabs tabs={tabs}/>
        </View>
    );
}

export default HomePage;