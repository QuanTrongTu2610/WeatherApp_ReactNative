import React from 'react'
import { View, TouchableHighlight, Text, Image } from 'react-native'
import PropTypes from 'prop-types'
import styles from './styles'
import Icon from './Icon'

const ListItem = ({ text, onPress, checkmark = true, selected = false, visible = true , customIcon = null, colorTheme}) => {
    return (
        <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
            <View style={styles.row}>
                <Text style={styles.text}>{text}</Text>
                {selected ? <Icon visible={visible} checkmark={checkmark} colorTheme={colorTheme}></Icon> : null}
                {customIcon}
            </View>
        </TouchableHighlight>
    );
}

ListItem.prototype = {
    onPress: PropTypes.func,
    text: PropTypes.string,
    selected: PropTypes.bool,
    visible : PropTypes.bool,
    customIcon: PropTypes.element,
    colorTheme: PropTypes.string,
}

export default ListItem;

