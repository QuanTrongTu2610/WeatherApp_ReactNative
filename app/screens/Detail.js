import React from 'react'
import { View, Text } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const styles = EStyleSheet.create({
    container: {
    },
    text: {
        color: 'white',
        marginBottom: 10,
    },
    title: {
        color: 'white',
        opacity: 0.5,
    }
})

const Detail = ({ title, informarion }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{informarion}</Text>
        </View>
    )
}

export default Detail