import { ImageBackground, Pressable, StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SimpleLineIcons } from '@expo/vector-icons';
import Constants from 'expo-constants';
import WeatherInfo from './WeatherInfo';
import * as Location from 'expo-location';

const API_KEYS ='6a2dbc7a83cbc824c715fad97a9dcaed';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setloaded] = useState(false);


  //fetching weather data
  const fetchWeatherData = async(cityName) => { //parses the city name using the input text 
    try{
      setloaded(false);
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`);
      if (response.status == 200){
        const data = await response.json(); //converts response to json
        console.log(data) // used to check that we are getting data from api in ther terminal
        setWeatherData(data);
      }
      else {
        alert('City does not exist') // if there is no response then data will be set to null
      }
      setloaded(true)

    } catch(error) {
        Alert.alert('Error',error.message)
    }

  }
 
  useEffect(() => {
      fetchWeatherData('London'); // sets default location to london
      
  }, []);

  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color="red" />
      </View>
    )
  }


  return (
   <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>

  )
}

export default Weather

const styles = StyleSheet.create({
    container:{
        flex: 1,
        
    },

    menuIcon:{
      position: 'absolute',
      right: 150,
      top: 70,
      
    }
})