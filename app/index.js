import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet'
import Config from '../app/config/config'
import { Provider } from 'react-redux'
import Store from './redux/store/store'

EStyleSheet.build({
    $primaryBlue: '#4F6D7A',
    $primaryOrange: '#D57A66',
    $primaryGreen: '#00BD9D',
    $primaryPurple: '#9E768F',

    $lightGrey: '#F0F0F0',
    $border: '#979797',
    $inputText: '#797979',
    $darkText: '#343434'
})

const App = () => {
    return (
        < Provider store={Store} >
            <Config></Config>
        </Provider >
    )
}

export default App