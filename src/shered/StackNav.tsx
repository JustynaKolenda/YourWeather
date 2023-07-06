import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WeatherCard } from '../feature/WeatherCard';

const Stack = createNativeStackNavigator();

export const StackNav = () =>{
    return (
        <Stack.Navigator>
            <Stack.Screen  options={{headerShown: false}} name="Home" component={WeatherCard} />
        </Stack.Navigator>
    )
}