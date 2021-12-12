import React from 'react';
import { TouchableOpacity, Text, Image, View} from 'react-native';

import { styles } from './styles';

export function ButtonFinal() {
    return(
        <View>
            <TouchableOpacity style={styles.button} >
                <View style={{alignItems: 'center'}}>

                    <Text style={{textAlign: 'center', fontWeight: 'bold', marginLeft: 10}}>VER TUDO</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}