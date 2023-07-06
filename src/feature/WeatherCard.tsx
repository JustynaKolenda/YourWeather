
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Button, PermissionsAndroid, ImageBackground} from 'react-native';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import reactotron from 'reactotron-react-native';
import { requestLocationPermission } from '../shered/api';
import { WeatherElements } from './WeatherElements';
import { DateTime } from './DateTime';
import { calcutateTime, calculateDate, API_KEY } from '../shered/utils';

export const WeatherCard = () => {
  // state to hold location
  const [location, setLocation] = useState(false);
  const [viewLocation, setViewLocation] = useState<any>()
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [data, setData] = useState({});
  
  // function to check permissions and get Location
  const getLocation = () => {
    const result = requestLocationPermission();
    result.then(res => {
      if (res) {
        Geolocation.getCurrentPosition(
          position => {
            reactotron.log("position",position.coords);
            setViewLocation(position.coords)
            setLocation(true);
        },
          error => {
            // See error code charts below.
            console.log(error.code, error.message);
            setLocation(false);
          },
        );
      }
    });

  };

  useEffect(() => {
    (async () => {
    //   let location = await getLocation()
      fetchDataFromApi("40.7128", "-74.0060");
    })();
  }, [])

  const fetchDataFromApi = (latitude: any, longitude: any) => {
    if(latitude && longitude) {
      fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
      .then(res => res.json()).then(data => {
      setData(data)
      })
    }
  }

  useEffect (() => {
    setInterval(() => {
        setTime(calcutateTime) 
        setDate(calculateDate) 
    
    }, 1000);
}, [])

  return (
    <View style={styles.container}>
        <ImageBackground source={{uri:'night'}} resizeMode="cover" style={styles.image}>
            {/* <View
                style={{marginTop: 10, padding: 10, borderRadius: 10, width: '40%'}}>
                <Button title="Get Location" onPress={getLocation} />
            </View> */}
                <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon} time={time} date={date}/>
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
});
