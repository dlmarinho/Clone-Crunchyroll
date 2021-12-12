import React from 'react';
import { Text, TextInput, TouchableOpacity, View, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './style'

export function Login () {
    const navegation = useNavigation();
   
    return(
        <>
            <View style={{alignItems: 'center',  backgroundColor: 'black'}}>
                <Text style={{justifyContent: 'flex-start', color: 'white', fontSize: 20, alignItems: 'center', marginTop: 8}}>Entrar</Text>
            </View>
            <View style={styles.container}>
                <Image source={require('../../../Assets/Logo-T.png')} style={{resizeMode: 'contain', width: 1000, height: 150}}/>
                <TextInput style={{color: 'white', backgroundColor: '#404040', width: 300,  borderBottomColor: "#ff9100",  borderBottomWidth: 2}} placeholderTextColor={'white'} placeholder="E-mail ou Nome de Usuário"></TextInput>
                <TextInput style={{color: 'white', backgroundColor: '#404040', width: 300, marginTop: 10, borderBottomColor: "#ff9100",  borderBottomWidth: 2}} placeholderTextColor={'white'} placeholder="Senha"></TextInput>
                <View style={{width: 380, alignItems: 'center'}}>
                    <Text style={{color: 'white', margin: 15}}>Ao entrar com sua conta, você declara possuir mais de 16 anos de idade e 
                        estar de acordo com nossos <Text style={{color: 'orange'}}>Termos e condições</Text> e nossa <Text style={{color: 'orange'}}>Plitica de Privacidade</Text></Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={function(){navegation.navigate('Home')}}>
                    <Text style={{textAlign: 'center'}}>ENTRAR</Text>
                </TouchableOpacity>
                <View style={{width: 380, alignItems: 'center'}}>
                    <Text style={{color: 'orange', margin: 15}}>Esqueceu a senha <Text style={{color: 'white'}}>|</Text> Criar conta</Text>
                </View>
            </View>
        </>
    )
}