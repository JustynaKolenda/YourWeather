import React from 'react'
import { Image, StyleSheet, Text, View } from "react-native"
import moment from 'moment-timezone'

export const FutureWeatherItem = ({forecastItem}) => {
    const img = {uri: "http://openweathermap.org/img/wn/"+forecastItem.weather[0].icon+"@2x.png"}
    return (
        <View  style={styles.futureForecastItemContainer}>
            <Text  style={styles.day}>{moment(forecastItem.dt * 1000).format('ddd')}</Text>
            <Image source={img} style={styles.image} />
            <Text  style={styles.temp}>Night - {forecastItem.temp.night}&#176;C</Text>
            <Text  style={styles.temp}>Day - {forecastItem.temp.day}&#176;C</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 100,
        height:100
    }, 
    futureForecastItemContainer: {
        flex:1,
        justifyContent: 'center',
        backgroundColor: '#00000033',
        borderRadius:10,
        borderColor:"#eee",
        borderWidth:1,
        paddingLeft: 20,
        paddingRight:20,
        marginLeft: 10,
        paddingBottom:0,
        paddingTop:10
    }, 
    day: {
        fontSize: 20,
        color:"white",
        backgroundColor: "#3c3c44",
        paddingTop: 5,
        paddingBottom:5,
        textAlign:"center",
        borderRadius: 50,
        fontWeight: "200",
    },   
    temp: {
        fontSize: 14,
        color:"white",
        fontWeight:"100",
        textAlign:"center"
    },
})