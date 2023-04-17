import { StyleSheet, Text, View, ActivityIndicator, Alert, SafeAreaView } from 'react-native'
import React from 'react'
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import WeatherInfo2 from './WeatherInfo2';

const API_KEYS ='6a2dbc7a83cbc824c715fad97a9dcaed';

const Weather2 = () => {

  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setloaded] = useState(false);


  //fetching weather data
  const fetchWeatherData2 = async(cityName) => { //parses the city name using the input text 
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
      fetchWeatherData2('New York'); // sets default location to london
      
  }, []);

  if(!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size='large' color="red" />
      </View>
    )
  }


  return (
    <WeatherInfo2 weatherData={weatherData} fetchWeatherData2={fetchWeatherData2}/>
  )
}


export default Weather2

const styles = StyleSheet.create({
  
})