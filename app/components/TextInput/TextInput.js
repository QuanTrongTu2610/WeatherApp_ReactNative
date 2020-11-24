import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableHighlight, TextInput } from 'react-native'
import styles from './styles'
import color from 'color'

const Input = (props) => {
    {/*Un pack object props*/ }
    const { onPress, buttonText, editable } = props;
    const styleContainer = [styles.container]

    if (editable == false) {
        styleContainer.push(styles.lockInput);
    }

    const underlay = color(styles.$buttonBackGroundColorBase).darken(0.1)

    return (
        <View style={styleContainer}>
            <TouchableHighlight underlayColor={underlay} style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.textInButton}>{buttonText}</Text>
            </TouchableHighlight>
            <TextInput keyboardType='numeric' style={styles.textInput} {...props}></TextInput>
        </View>
    );
}

Input.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool
}

export default Input;