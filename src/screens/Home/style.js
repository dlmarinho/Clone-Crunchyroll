const {StyleSheet, Button} = require('react-native');

export const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
    },

    Img:{
        marginTop: -20,
        marginLeft: -40,
        height: 100,
        width: 250,
        resizeMode: 'contain',
    },

    imgLupa:{
        width: 47,
        height: 55, 
    },

    textWithShadow:{
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },

    linearGradient: {
        height: 500,
      }


})