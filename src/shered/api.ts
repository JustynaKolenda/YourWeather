import { API_KEY, baseUrl } from "./config";



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