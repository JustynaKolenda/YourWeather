import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment-timezone'
import {WeatherItem} from './WeatherItem'

type DateTimeProps = {
    current: {
        sunrise: number;
        sunset: number;
        pressure: number;
        humidity: number;
        wind_speed: number;
    },
    timezone: string
}

export const DateTime = ({current, timezone}:DateTimeProps) => {
    return (
        <View style={styles.container}>  
           <View>
               <View style={styles.wraper}>
                <Text style={styles.timezone}>{timezone}</Text>
                <View style={styles.weatherItemContainer}>
                        <WeatherItem icon={'humidity'} title="Humidity" value={current? current.humidity : ""} unit="%"/>
                        <WeatherItem icon={'sunrise'} title="Sunrise" value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit="am"/>
                        <WeatherItem icon={'sunset'} title="Sunset" value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""} unit="pm"/>
                        <WeatherItem icon={'wind'} title="Wind" value={current? current.wind_speed : ""} unit="km/h"/>
                        <WeatherItem title="Pressure" value={current? current.pressure : ""} unit="hPA"/>
                </View>
               </View>
           </View>
      
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1.5,
        flexDirection:"row",
        justifyContent:'center',
        padding: 15,
        
    },
    heading: {
        fontSize: 45,
        color:'white',
        fontWeight: '100'
    },
    subheading: {
        fontSize: 25,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign:'right',
        marginTop: 20
    },
    timezone: {
        fontSize: 30,
        color:'white',
        fontWeight: '100'
    },
    latlong:{
        fontSize:16,
        color:'white',
        fontWeight: '700'
    },
    weatherItemContainer: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        width:'100%'
    }, 
    weatherItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    weatherItemTitle: {
        color:'#eee',
        fontSize: 14,
        fontWeight: '100'
    },
    wraper: {
       paddingTop:30,
       justifyContent:'center',
       alignItems:'center',
    }
})
