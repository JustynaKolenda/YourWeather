import React from 'react'
import {View} from 'react-native'
import { FutureWeatherItem } from './FutureWeatherItem'

export const FutureWeather = ({data}) => {
    return (
        <View style={{flexDirection: 'row'}}>
            {
                data && data.length > 0 ? 
                data.map((data: any, idx: React.Key | null | undefined) => (
                    idx !== 0 &&  <FutureWeatherItem key={idx} forecastItem={data}/>
                ))
                : <></>
            }
        </View>
    )
}




