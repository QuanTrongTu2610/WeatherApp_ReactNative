import React from 'react'
import Home from './screens/Home'
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux'
import Store from './redux/store'

EStyleSheet.build({
    $darkBlue: '#03002e',
    $orange: '#ff8b3d'
})

export default App = () => {
    return (
        <Provider store={Store}>
            <Home></Home>
        </Provider>
    )
}