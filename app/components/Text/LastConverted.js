import React from 'react'
import styles from './styles'
import { Text } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'

const LastConverted = ({ base, quote, conversionRate, date }) => {
    return (
        <Text style={styles.text}>1 {base} = {conversionRate} {quote} as of {moment(date).format('MMMM D, YYYY')} </Text>
    );
}

LastConverted.prototype = {
    base: PropTypes.string,
    quote: PropTypes.string,
    date: PropTypes.object,
    conversionRate: PropTypes.number
}

export default LastConverted