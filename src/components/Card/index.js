import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'

import { styles } from './style';

export function Card(props) {
    return(
        <TouchableOpacity style={styles.container}>
            <Image source={props.cover} style={styles.couver}/>
            
            <View style={styles.view}>
                <Image source={props.capa} style={styles.capa}/>
            </View>

            <Text style={styles.nome}>{props.nome}</Text>
            <Text style={styles.sobre}>{props.sobre}</Text>

            <View style={{flexDirection: 'row'}}>

                <Text style={styles.tipo}>{props.tipo}</Text>
                <Icon style={styles.logo} name="rhombus" size={6} color={'silver'}/>
                <Text style={styles.audio}>{props.audio}</Text>
                <Entypo style={styles.icon} name="dots-three-vertical" size={20} color={'silver'}/>

            </View>

        </TouchableOpacity>
    )
}