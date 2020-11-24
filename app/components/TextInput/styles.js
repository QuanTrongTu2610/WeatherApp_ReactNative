import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({
    $buttonBackGroundColorBase:'white',

    container: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '80%', 
        height: 48,
        borderRadius: 10,
    },
    buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 48,
        width: '15%',
        backgroundColor: '#EFE5DC',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    textInButton: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '$primaryBlue'
    },
    textInput: {
        height: 48,
        width: '80%',
        fontSize: 16
    },
    lockInput:{
        backgroundColor: '#DCDCDC'
    }
});