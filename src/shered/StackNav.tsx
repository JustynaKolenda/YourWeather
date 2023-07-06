import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WeatherCard } from '../feature/WeatherCard';

const Stack = createNativeStackNavigator();

export const StackNav = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={WeatherCard} />
        </Stack.Navigator>
    )
}