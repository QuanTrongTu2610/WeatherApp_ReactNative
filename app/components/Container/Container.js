import React from 'react'
import styles from './styles'
import PropTypes from 'prop-types'
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';

const Container = ({ children, primaryColor }) => {
    const styleContainer = [styles.container, { backgroundColor: primaryColor }]
    return (
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
            <View style={styleContainer}>
                {children}
            </View>
        </TouchableWithoutFeedback>
    );
}

Container.propTypes = {
    children: PropTypes.array,
}

export default Container;