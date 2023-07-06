import React from 'react'
import {ScrollView, StyleSheet} from 'react-native'
import {FutureWeather } from './FutureWeather'
import { CurrentWeather } from './CurrentWeather'

export const WeatherElements = ({weatherData}:any) => {
    return (
        <ScrollView horizontal={true} style={styles.scrollView}>
            <CurrentWeather data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}/>
            <FutureWeather data={weatherData}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollView: {
        flex:0.4,
        backgroundColor: '#18181bcc',
        paddingBottom:20,
        paddingTop:20
    },
})

