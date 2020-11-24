import { View, Image } from 'react-native'
import styles from './styles'
import React from 'react'

const Icon = (props) => {
    const iconStyle = [styles.icon]
    if(props.visible){
        iconStyle.push(styles.iconVisible);
    }

    if(props.colorTheme){
        iconStyle.push({backgroundColor: props.colorTheme})
    }
    
    return(
        <View style={iconStyle}>
            {props.checkmark ? <Image style={styles.checked} source={require('./images/check.png')}></Image> : null}
        </View>
    );
}

export default Icon;