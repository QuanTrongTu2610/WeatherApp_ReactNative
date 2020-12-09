import React from 'react'
import { View, Text, Image, Dimensions } from 'react-native'
import EStyleSheet from 'react-native-extended-stylesheet'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

const styles = EStyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    small: {
        justifyContent: 'center',
        alignItems: 'center',
        width: width / 5,
    },
    text: {
        color: 'white',
    },
    icon: {
        resizeMode: 'contain',
        width: 30, 
        height: 30,
    }
})

const DayList = ({ name, source, maxTemp, minTemp }) => {
    return (
        <View style={styles.container}>
            <View style={{ width: 75 }}>
                <Text style={styles.text}>{name}</Text>
            </View>

            <View style={styles.small}>
                <Image style={styles.icon} source={source}></Image>
            </View>

            <View style={[styles.small, { alignItems: 'flex-end' }]}>
                <Text style={styles.text}>{minTemp}°C</Text>
            </View>

            <View style={styles.small}>
                <Text style={styles.text}>{maxTemp}°C</Text>
            </View>
        </View >
    )
}
export default DayList