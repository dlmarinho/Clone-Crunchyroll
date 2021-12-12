import React from 'react';
import { View, ImageBackground, ScrollView, Text, Image } from 'react-native'

import {styles} from './style'

export function Header() {
    return(
        <>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'black', height: 60}} >
                <Image source={require('../../../Assets/Logo-T.png')}  style={styles.Img} />  
                <Image source={require('../../../Assets/icone.png')}  style={styles.imgLupa} /> 
            </View> 
        </>
    )
}