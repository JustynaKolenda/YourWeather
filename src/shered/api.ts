
const API_KEY ='ecd0eb155f6df491dfbd4cbeca31f647';

  export const searchCity = (name: string) =>{
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${API_KEY}`)
    .then(res => res.json()).then(data => {
      const coor = data.coord
      return coor
    })
      .catch((error) => {
        console.error(error);
    });
  }

  export const getWeatherByCoord = (data:any) =>{
    return fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data.lat}&lon=${data.lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
    .then(res => res.json()).then(data => {
        return (data)
    })
      .catch((error) => {
        console.error(error);
    });
  }