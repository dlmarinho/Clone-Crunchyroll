import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

const stack = createStackNavigator();

export function Rotes() {
    return(
        <>
            <stack.Navigator>
                <stack.Screen name="Login" component={Login} options={{headerShown: false}}/> 
                <stack.Screen name="Home" component={Home} options={{headerShown: false}} />
            </stack.Navigator>
        </>
    )
}