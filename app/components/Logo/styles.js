import React from 'react'
import { Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const img_width = Dimensions.get('window').width / 2;


export default EStyleSheet.create({
    $largeBackgroundLogo: img_width,
    $largeLogo: img_width / 2,

    $smallBackgroundLogo: img_width / 2,
    $smallLogo: img_width / 4,

    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    backgroundLogo: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '$largeBackgroundLogo',
        height: '$largeBackgroundLogo',
        resizeMode: 'contain'
    },

    logo: {
        width: '$largeLogo',
        height: '$largeLogo',
        resizeMode: 'contain',
    },

    text: {
        color: 'white',
        fontSize: 28,
        letterSpacing: -0.5,
        marginTop: 15,
        fontWeight: '600',
    }
})