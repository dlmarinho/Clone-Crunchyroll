import React from 'react';
import { View, ImageBackground, ScrollView, Text } from 'react-native'
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';

import { styles } from './style';

export function Home ({nome}) {
    return(
        <>
                    <Header />
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.container}> 
                            <View style={{flex: 1}}>
                                <ImageBackground source={require('../../../Assets/PosterNovo.jpg')} style={{width: "100%", height: 666, marginTop: -26, justifyContent: 'flex-end'}}> 
                                <Text style={{color: 'white'}}>
                                    ATTACK ON TITAN
                                </Text>
                                    <Text style={{color: 'white'}}>
                                        Eren Jaeger jurou eliminar todos os Titãs, mas em uma batalha desesperada ele se torna aquilo que mais odeia. 
                                        Com seus novos poderes, ele luta pela liberdade da humanidade...
                                    </Text>       
                                </ImageBackground>
                                <Button />
                            </View>

                            <Text style={{color: 'white', marginTop: 20, marginLeft: 5, marginBottom: 10}}>
                                FAVORITOS
                            </Text>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Box 
                                    cover={require('../../../Assets/Saga.jpg')}
                                    nome='Viland Saga'
                                    audio='LEGENDADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/Dororo.jpg')}
                                    nome='Dororo'
                                    audio='LEGENDADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/One_Piece.png')}
                                    nome='One Piece'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />


                                <Box 
                                    cover={require('../../../Assets/Parasyte.jpg')}
                                    nome='Parasyte'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/akira.jpg')}
                                    nome='Akira'
                                    audio='DUBLADO'
                                    tipo='FILME'
                                />

                            </ScrollView>
                            <Card 
                                cover={require('../../../Assets/Dorohedoro.jpg')}
                                capa={require('../../../Assets/Capa.jpg')}
                            />
                        </View>    
                    </ScrollView>    
                
            
            
            
            
            {/* <View style={styles.container}>
                <Image source={require('../../../Assets/Logo-T.png')}  style={styles.Img} />
            </View>

            <View style={{backgroundColor: 'red', width: 50, flex: 1}}>
                <Image source={require('../../../Assets/icone.png')}  style={styles.imgLupa} />
            </View>

            <View style={styles.container}>
                <Image source={require('../../../Assets/Poster.jpg')} style={{width: 400, height: 600, marginTop: -315, backgroundColor: 'orange'}}/>
            </View> */}
        </>
    )
}