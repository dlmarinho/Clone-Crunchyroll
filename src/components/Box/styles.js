const {StyleSheet, Button, BackHandler} = require('react-native');

export const styles = StyleSheet.create({
    container:{
        width: 160,
        height: 290,
        marginLeft: 9,
        elevation: 2,
        backgroundColor: '#1B2D37'
    },

    couver:{
        resizeMode: 'stretch',
        width: 160,
        height: 200
    },

    title:{
       fontSize: 14,
       fontWeight: 'bold',
       color: 'white',
       marginTop: 5, 
       marginLeft: 8
    },

    ser:{
        fontSize: 12,
        color: '#2c9091',
        marginTop: 40,
        marginLeft: 8
    },

    le:{
        fontSize: 12,
        color: 'white',
        marginTop: 40,
        marginLeft: 5
    },

    logo:{
        marginTop: 45,
        marginLeft: 7,    
    },

    icon:{
        marginTop: 38,
        marginLeft: 7
    }
    
})