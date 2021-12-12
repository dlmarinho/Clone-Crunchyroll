import React from 'react';
import {TouchableOpacity, Image, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'

import { styles } from './styles';

export function Box(props) {
    return(

        <TouchableOpacity style={styles.container}>
            <Image 
                source={props.cover}
                style={styles.couver}
            />

            <View>

                <Text style={styles.title}>{props.nome}</Text>

            </View>

            <View style={{flexDirection: 'row'}}>

                <Text style={styles.ser}>{props.tipo}</Text>
                <Icon style={styles.logo} name="rhombus" size={6} color={'silver'}/>
                <Text style={styles.le}>{props.audio}</Text>
                <Entypo style={styles.icon} name="dots-three-vertical" size={20} color={'silver'}/>

            </View>
        </TouchableOpacity>

    )
}


