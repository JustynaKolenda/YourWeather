import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { useStore } from '../shered/store';
import { GeoLocation } from './GeoLocation';

export const SearchCity = () =>{
    
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
        }
    });

    const [getWeatherForCity] = useStore(
        (state) => [ state.getWeatherForCity],
      )

    const findCity = (data:{name:string}) =>{
        getWeatherForCity(data.name)
    }

    return (
        <View style={styles.box}>
            <Controller
                control={control}
                rules={{ required: true,}}
                name={'name'}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Finde City"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
        {errors.name && <Text style={styles.error}>City not found</Text>}
        <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(findCity)}>
                <Text style={styles.buttonTilte}>Search</Text>
            </TouchableOpacity>
            <GeoLocation />
        </View>
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
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonTilte: {
        fontSize:18,
        color:'white',
        fontWeight: '100'
    },
    error: {
      fontSize:12,
      fontWeight:'800',
      color:'red',
      paddingLeft:20,
    },
    input: {
      borderColor: 'white',
      borderWidth:1,
      borderRadius:20,
      paddingLeft:20
    },
    box: {
      paddingBottom:10,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:20,
      backgroundColor: "#18181b99",

    }
})