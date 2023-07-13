import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../screens/loginScreen'
import SignIn from '../screens/signInScreen'
import Welcome from '../screens/welcomeScreen'

const Stack = createStackNavigator();

export default function AuthNavigation() {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="LoginScreen" component={Login}/>
            <Stack.Screen name="SignInScreen" component={SignIn}/>
            <Stack.Screen name="WelcomeScreen" component={Welcome}/>
        </Stack.Navigator>
    )
};