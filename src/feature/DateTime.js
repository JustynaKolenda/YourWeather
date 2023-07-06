import React from 'react'
import {View, Text, StyleSheet} from 'react-native';
import moment from 'moment-timezone'
import {WeatherItem} from './WeatherItem'

export const DateTime = ({current, timezone,time, date}) => {
    return (
        <View style={styles.container}>  
           <View>
               <View>
                   <Text style={styles.heading}>{time}</Text>
               </View>
               <View>
                   <Text style={styles.subheading}>{date}</Text>
               </View>
               <View style={styles.wraper}>
                <Text style={styles.timezone}>{timezone}</Text>
                <View style={styles.weatherItemContainer}>
                        <WeatherItem title="Humidity" value={current? current.humidity : ""} unit="%"/>
                        <WeatherItem title="Pressure" value={current? current.pressure : ""} unit="hPA"/>
                        <WeatherItem title="Sunrise" value={current? moment.tz(current.sunrise * 1000, timezone ).format('HH:mm'): ""} unit="am"/>
                        <WeatherItem title="Sunset" value={current? moment.tz(current.sunset * 1000, timezone ).format('HH:mm') : ""} unit="pm"/>
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
        justifyContent:'space-between',
        padding: 15
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
        fontSize: 20,
        color:'white'
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
        marginTop: 10
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
        justifyContent:'center',
        textAlign:'center'
    }
})
