import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { requestLocationPermission } from '../shered/api';
import Geolocation from 'react-native-geolocation-service';
import { useStore } from "../shered/store";

export const GeoLocation = () => {
    const [location, setLocation] = useState(false);
    const [getWeatherByCoordynation] = useStore(
        (state) => [ state.getWeatherByCoordynation],
      )

    
    const getLocation = () => {
        const result = requestLocationPermission();
        result.then(res => {
          if (res) {
            Geolocation.getCurrentPosition(
              position => {
                const lat = position.coords.latitude
                const lon = position.coords.longitude
                const coords = {lat, lon}
                getWeatherByCoordynation(coords)
                setLocation(true);
            },
              error => {
                console.log(error.code, error.message);
                setLocation(false);
              },
            );
          }
        });
    }
    return (
        <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={getLocation}>
                <Text style={styles.buttonTilte}>Check Your Geo Localization</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create ({
    boxButton: {
        paddingTop:10,
        alignItems:'center'
    },
    button: {
        backgroundColor:'#000000',
        borderRightWidth:1,
        borderRadius:20,
        height:50,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonTilte: {
        fontSize:18,
        color:'white',
        fontWeight: '100'
    },
})