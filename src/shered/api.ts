import { API_KEY, baseUrl } from "../../config";
import {PermissionsAndroid} from 'react-native';

  export const searchCity = (name: string) =>{
    return fetch(`${baseUrl}/2.5/weather?q=${name}&appid=${API_KEY}`)
    .then(res => res.json()).then(data => {
      const coor = data.coord
      return coor
    })
      .catch((error) => {
        console.error(error);
    });
  }

  export const getWeatherByCoord = (data:any) =>{
    return fetch(`${baseUrl}/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then(res => res.json()).then(data => {
        return (data)
    })
      .catch((error) => {
        console.error(error);
    });
  }

  export const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message: 'Can we access your location?',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === 'granted') {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
  };