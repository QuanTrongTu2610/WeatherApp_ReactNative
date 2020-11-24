import React from 'react'
import { NavigationContainer, BaseRouter } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import Currency from '../screens/Currency'
import Option from '../screens/Option'
import Themes from '../screens/Themes'

const Stack = createStackNavigator()

const Config = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ header: () => null }}></Stack.Screen>
                <Stack.Screen name="Currency" component={Currency}></Stack.Screen>
                <Stack.Screen name="Option" component={Option}></Stack.Screen>
                <Stack.Screen name="Themes" component={Themes}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Config; 