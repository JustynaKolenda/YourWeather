import { create } from 'zustand'
import { getWeatherByCoord, searchCity } from './api'
import { dataWeather } from '../../response'
import { ICoord } from './utils'

type State = {
    weather: any,
    coord: ICoord
  }
  
  type Action = {
    getWeatherForCity: ( city: string) => void,
    getWather: ()=> void
  }
  
 export const useStore = create<State & Action>((set,get) => ({
    weather: {dataWeather},
    coord: {
        lat:  48.8534, 
        lon: -74.0060
    },
    getWeatherForCity: async (city: string) => {
        const coordianteForCity = await searchCity(city)
        set({coord: coordianteForCity})
        get().getWather()
    },
    getWather: async () => {
        const coord = get().coord
        const newWeather = await getWeatherByCoord(coord)
        set({weather: newWeather})
    } 
  }))