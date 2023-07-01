import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeNavigation from './navigation/homeNavigation'

const Stack = createStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="HomeScreenStack"
                    component={HomeNavigation}
                    options={{
                        headerShown: false 
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
};