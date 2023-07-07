
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ImageBackground} from 'react-native';
import { WeatherElements } from './weather/WeatherElements';
import { DateTime } from './basicInfo/DateTime';
import { calculateDate, } from '../shered/utils';
import { useInterval } from '../shered/useInterval';
import { SearchCity } from './SearchCity';
import { useStore } from '../shered/store';

export const WeatherCard = () => {
  const [date, setDate] = useState('')
  const [weather, getWather] = useStore(
    (state) => [state.weather,  state.getWather],
  )


  useEffect(() => {
    getWather()
  }, [])

    useInterval(() => { 
        setDate(calculateDate)
    }, 2000);

    

  return (
    <View style={styles.container}>
        <ImageBackground source={{uri:'night'}} resizeMode="cover" style={styles.image}>
                <SearchCity />
                {!weather? <Text>Citi not found</Text>: 
                <>
               <View>
                   <Text style={styles.subheading}>{date}</Text>
               </View>
                <DateTime current={weather.current} timezone={weather.timezone} />
                <WeatherElements weatherData={weather.daily}/>
              </>
  }
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
