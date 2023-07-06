
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, PermissionsAndroid, ImageBackground} from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import reactotron from 'reactotron-react-native';
import { requestLocationPermission } from '../shered/api';
import { WeatherElements } from './WeatherElements';
import { DateTime } from './DateTime';
import { calcutateTime, calculateDate, API_KEY } from '../shered/utils';
import { dataWeather } from '../../response';
import { useInterval } from '../shered/useInterval';
import { SearchCity } from './SearchCity';

type dataP = {
    current: {
        sunrise: number;
        sunset: number;
        pressure: number;
        humidity: number;
        wind_speed: number;
    },
    timezone: string,
    daily: Array<any>
}

export const WeatherCard = () => {
  // state to hold location
  const [date, setDate] = useState('')
  const [data, setData] = useState<dataP>({});
  const [city, setCity] = useState('')
  

  const fetchSearchCity = (city:string)=>{
    if(city) {
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
          .then(res => res.json()).then(data => {
            const coor = data.coord
          setCity(coor)
        })
    }
  }

  const fetchDataFromApi = (latitude: any, longitude: any) => {
    if(latitude && longitude) {
    //   fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    //   .then(res => res.json()).then(data => {
    //   setData(data)
    //   })
    setData(dataWeather)
    }
  }

  useEffect(() => {
    (async () => {
      fetchDataFromApi("40.7128", "-74.0060");
    })();
  }, [])

    useInterval(() => { 
        setDate(calculateDate)
    }, 2000);


  return (
    <View style={styles.container}>
        <ImageBackground source={{uri:'night'}} resizeMode="cover" style={styles.image}>
                <SearchCity />
               <View>
                   <Text style={styles.subheading}>{date}</Text>
               </View>
                <DateTime current={data.current} timezone={data.timezone} />
                <WeatherElements weatherData={data.daily}/>
        </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
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
});
