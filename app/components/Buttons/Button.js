import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'

const reverseButton = (props) => {
    return (
        <TouchableOpacity style={styles.reverseButton} onPress={props.onPress}>
            <View style={styles.wrapper}>
                <Image resizeMode="contain" style={styles.icon} source={require('./images/icon.png')}></Image>
                <Text style ={styles.text}>{props.Text}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default reverseButton;