import React from 'react';
import { Details } from '../screens/Details';
import Home from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const HomeStack = () => {

    const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator screenOptions={{
            headerShown: false
        }
        }>
            <HomeStack.Screen name="HomeStack" component={Home} />
            <HomeStack.Screen name="Details" component={Details} />
        </HomeStack.Navigator>
    )
}
