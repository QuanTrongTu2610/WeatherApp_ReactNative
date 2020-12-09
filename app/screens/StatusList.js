import React from 'react'
import { View, Text, Image } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        padding: 4,
        width: 70
    },
    text: {
        color: 'white',
        fontSize: 15, 
        padding: 10
    },
    icon: {
        height: 30,
        width :30,
        resizeMode: 'contain'
    }
})

const Item = ({ time, source, degree }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{time}</Text>
            <Image style={styles.icon} source={source}></Image>
            <Text style={styles.text}>{degree} ºC</Text>
        </View>
    )
}

export default Item