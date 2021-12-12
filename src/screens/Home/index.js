import React from 'react';
import { View, ImageBackground, ScrollView, Text } from 'react-native'
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
import { ButtonFinal } from '../../components/ButtonFinal';
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

                                <Box 
                                    cover={require('../../../Assets/jujutsu.png')}
                                    nome='jujutsu kaisen'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/Demon-slayer.png')}
                                    nome='Demon slayer'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                            </ScrollView>
                            
                            <Card 
                                cover={require('../../../Assets/Dorohedoro.jpg')}
                                capa={require('../../../Assets/Capa.jpg')}
                                nome='Dorohedoro'
                                sobre='Com a ajuda de Nikaido, Caiman procura o feiticeiro que o deixou com cabeça de lagarto...'
                                audio='DUBLADO'
                                tipo='SÉRIE'
                            />

                            <Text style={{color: 'white', marginTop: 20, marginLeft: 5, marginBottom: 10}}>
                                RECOMENDADOS
                            </Text>

                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Box 
                                    cover={require('../../../Assets/death-note.jpg')}
                                    nome='Death Note'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/fullmetal.jpg')}
                                    nome='Fullmetal Alchemist'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/cowboy-bebop.jpg')}
                                    nome='Cowboy Bebop'
                                    audio='LEGENDADO'
                                    tipo='SÉRIE'
                                />


                                <Box 
                                    cover={require('../../../Assets/tokyo-ghoul.jpg')}
                                    nome='Tokyo Ghoul'
                                    audio='LEGENDADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/One-Punch-Man.jpg')}
                                    nome='One Punch Man'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/my-hero-academy.jpg')}
                                    nome='My Hero Academy'
                                    audio='LEGENDADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/your-name.jpg')}
                                    nome='Your Name.jpg'
                                    audio='DUBLADO'
                                    tipo='FILME'
                                />

                            </ScrollView>

                            <Card 
                                cover={require('../../../Assets/Fire-Force.jpg')}
                                capa={require('../../../Assets/fr-capa.jpg')}
                                nome='Fire Force'
                                sobre='Shinra e seus companheiros estão prontos para entrar para a Brigada de Incêndio para impedir...'
                                audio='LEGENDADO'
                                tipo='SÉRIE'
                            />

                            <Card 
                                cover={require('../../../Assets/overlord.jpg')}
                                capa={require('../../../Assets/Overlord.png')}
                                nome='Overlord'
                                sobre='Depois que um jogador veterano se recusa a deslogar de um popular MMORPG, os NPCs...'
                                audio='LEGENDADO'
                                tipo='SÉRIE'
                            />

                            <Text style={{color: 'white', marginTop: 20, marginLeft: 5, marginBottom: 10}}>
                                MAIS POPULARES
                            </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <Box 
                                    cover={require('../../../Assets/Naruto.jpg')}
                                    nome='Naruto'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/Naruto-Shippuden.jpg')}
                                    nome='Naruto Shippuden'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/One_Piece.png')}
                                    nome='One Piece'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />


                                <Box 
                                    cover={require('../../../Assets/Dragon-Ball.jpg')}
                                    nome='Dragon Ball'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/Bleach.jpg')}
                                    nome='Bleach'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/Dragon-Ball-Super.jpg')}
                                    nome='Dragon Ball Super'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                                <Box 
                                    cover={require('../../../Assets/lost-canvas.jpg')}
                                    nome='Lost Canvas'
                                    audio='DUBLADO'
                                    tipo='SÉRIE'
                                />

                            </ScrollView>

                            <View style={{alignItems: 'center'}}>
                                <Text style={{color: 'white', marginTop: 20, fontSize: 18}}>Você chegou ao fim da lista.</Text>
                                <ButtonFinal />
                            </View>
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