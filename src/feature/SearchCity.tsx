import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { TextInput, Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native'


export const SearchCity = () =>{
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
          city: '',
        }
    });

    const findCity = () =>{
        return 
    }
    return (
        <View style={styles.box}>
            <Controller
                control={control}
                rules={{ required: true,}}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        style={styles.input}
                        placeholder="Finde City"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
                name={'city'}
            />
        {errors.city && <Text style={styles.error}>City not found</Text>}
        <View style={styles.boxButton}>
            <TouchableOpacity style={styles.button} onPress={handleSubmit(findCity)}>
                <Text style={styles.buttonTilte}>Search</Text>
            </TouchableOpacity>
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