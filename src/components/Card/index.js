import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import { styles } from './style';

export function Card(props) {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={props.cover} style={styles.couver}/>
            <View style={styles.view}>
                <Image source={props.capa} style={styles.capa}/>
            </View>            
        </TouchableOpacity>
    )
}