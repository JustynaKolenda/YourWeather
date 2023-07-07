import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native';

type WeatherItemProps = {
    title : string,
    value : string | number,
    unit : string,
    icon? : string
}

export const WeatherItem = ({title, value, unit, icon}:WeatherItemProps) => {
    return(
        <View style={styles.weatherItem}>
            {icon? <Image source={{uri: icon}} style={styles.icon} />: <View style={{marginRight:30}}></View>}
            <Text style={styles.weatherItemTitle}>{title}</Text>
            <Text style={[styles.weatherItemTitle, {paddingRight:10}]}>{value}{unit}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    weatherItem: {
        flexDirection: 'row',
        justifyContent:'center',
        paddingBottom:5,
        paddingTop:10,
        marginRight:0
    },
    weatherItemTitle: {
        color:'#eee',
        fontSize: 16,
        fontWeight: '100',
        flex:0.4,
        paddingTop:5,
        paddingRight:5
    },
    icon: {
        width:20,
        height:20,
        marginRight:10,
        paddingTop:5,
        paddingRight:5
    }
})