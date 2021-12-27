import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Details } from '../screens/Details';
import { StyleSheet } from 'react-native';
import { HomeStack } from './HomeStack';
import { useSelector } from 'react-redux';
import MyCart from '../screens/MyCart';

export const MainNavigator = () => {

    const Tab = createBottomTabNavigator();
    const cart = useSelector(state => state.cart);

    console.log(cart);

    return (
        <NavigationContainer>

            {/* Definimos las options del tabNavigator */}
            <Tab.Navigator
            screenOptions={({ route }) => ({
            tabBarIcon: () => {
                if (route.name === 'Home') {
                return (
                    <Ionicons
                    name= 'home'
                    size={24}
                    color= 'white'
                    />
                );
                } else if (route.name === 'My Cart') {
                return (
                    <Entypo
                    name={'shopping-bag'}
                    size={24}
                    color= 'white'
                    />
                );
                }
            },
            tabBarInactiveTintColor: 'white',
            tabBarActiveTintColor: 'tomato',
            tabBarStyle: styles.tabBar,
            headerShown: false,
            headerStyle: styles.header,
            headerTitleAlign: 'center'
            })}
            >

            <Tab.Screen
            name = "Home">
                {props => <HomeStack {...props}></HomeStack>}
            </Tab.Screen>
            <Tab.Screen name="My Cart" options={ cart.cart.length > 0 ? {tabBarBadge: cart.cart.length}: null}>
                {props => <MyCart {...props}></MyCart>}
            </Tab.Screen>

            </Tab.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "black",
        padding: 5,
    },

    header: {
        backgroundColor: "gray",
        height: 100,
    }
    
})
