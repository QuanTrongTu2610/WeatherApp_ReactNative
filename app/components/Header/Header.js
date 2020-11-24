import React from 'react'
import { TouchableOpacity, Image, View } from 'react-native'
import styles from './styles';

const Header = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.header} onPress={props.onPress}>
                <Image style={styles.icon} resizeMode='contain' source={require('./images/gear.png')}></Image>
            </TouchableOpacity>
        </View>

    )
}

export default Header;