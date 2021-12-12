import React from 'react';
import { TouchableOpacity, Text, Image, View} from 'react-native';

import { styles } from './styles';

export function Button() {
    return(
        <View>
            <TouchableOpacity style={styles.button} >
                <View style={{flexDirection: 'row', alignItems: 'center'}}>

                    <Image source={require('../../../Assets/Play2.png')} style={styles.Img}/>
                    <Text style={{textAlign: 'center', fontWeight: 'bold', marginLeft: 10}}>ASSISTIR AGORA</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}